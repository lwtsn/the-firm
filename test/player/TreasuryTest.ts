import { expect } from 'chai';
import { Cash, Treasury } from '../../typechain';
import { deployTreasuryContract, getProvider } from '../helpers/contract';
import CashArtifact from '../../artifacts/contracts/Cash.sol/Cash.json';

import { oneEther } from '../helpers/numbers';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { BigNumber } from 'ethers';

const [alice, bob] = getProvider().getWallets();

describe('Treasury', () => {
  let cash: Cash | MockContract;
  let treasury: Treasury;

  beforeEach(async () => {
    treasury = await deployTreasuryContract(alice);
    cash = await deployMockContract(alice, CashArtifact.abi);

    await treasury.setCashAddress(cash.address);
  });

  it('Should have null default balance', async () => {
    await treasury.balances(alice.address).then((balance: BigNumber) => {
      expect(balance).to.eq(0);
    });
  });

  describe('Balances', () => {
    beforeEach(async () => {
      await treasury.setCashSpender(alice.address);
    });

    it('Should allow depositing of cash', async () => {
      await cash.mock.transferFrom.withArgs(alice.address, treasury.address, oneEther.mul(100)).returns(true);
      await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(100));

      await treasury.depositCash(oneEther.mul(100));

      await treasury.getBalance(alice.address).then((balance: BigNumber) => {
        expect(balance).to.eq(oneEther.mul(100));
      });
    });

    it('Should allow cash spending by Cash Spender', async () => {
      await cash.mock.transferFrom.withArgs(alice.address, treasury.address, oneEther.mul(100)).returns(true);
      await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(100));
      await cash.mock.burn.withArgs(oneEther.mul(50)).returns();

      await treasury.depositCash(oneEther.mul(100));

      await treasury.spendCash(alice.address, oneEther.mul(50));

      await treasury.getBalance(alice.address).then((balance: BigNumber) => {
        expect(balance).to.eq(oneEther.mul(50));
      });
    });

    describe('Restrictions', async () => {
      let bobConnectedTreasury: Treasury;

      beforeEach(async () => {
        bobConnectedTreasury = (await treasury.connect(bob)) as Treasury;
      });

      it('Should prevent deposits if balance is insufficient', async () => {
        await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(50));

        await expect(treasury.depositCash(oneEther.mul(100))).to.be.revertedWith('Insufficient funds');

        await treasury.getBalance(alice.address).then((balance: BigNumber) => {
          expect(balance).to.eq(0);
        });
      });

      it('Should prevent cash spending by non Cash Spender', async () => {
        await expect(bobConnectedTreasury.spendCash(alice.address, oneEther.mul(50))).to.be.revertedWith(
          'Not Cash Spender'
        );
      });

      it('Should prevent setting cash address by non admin', async () => {
        await expect(bobConnectedTreasury.setCashAddress(bob.address)).to.be.revertedWith('Not Admin');
      });

      it('Should prevent setting cash spender by non admin', async () => {
        await expect(bobConnectedTreasury.setCashSpender(bob.address)).to.be.revertedWith('Not Admin');
      });
    });
  });
});
