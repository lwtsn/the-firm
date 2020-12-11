import { expect } from 'chai';
import { Cash, Player, PlayerStats } from '../../typechain';
import { deployPlayerContract, getProvider } from '../helpers/contract';
import CashArtifact from '../../artifacts/contracts/Cash.sol/Cash.json';
import PlayerStatsArtifact from '../../artifacts/contracts/player/PlayerStats.sol/PlayerStats.json';

import { oneEther } from '../helpers/numbers';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { BigNumber } from 'ethers';

const [alice, bob] = getProvider().getWallets();

describe('Player', () => {
  let cash: Cash | MockContract;
  let playerStats: PlayerStats | MockContract;
  let player: Player;

  beforeEach(async () => {
    player = await deployPlayerContract(alice);
    cash = await deployMockContract(alice, CashArtifact.abi);
    playerStats = await deployMockContract(alice, PlayerStatsArtifact.abi);

    await player.setCashAddress(cash.address);
    await player.setPlayerStatsAddress(playerStats.address);
  });

  describe('Player creation', () => {
    it('Should allow creation of a player', async () => {
      await player.create();

      await playerStats.mock.createBasePlayer.withArgs(alice.address);

      await player.isPlayer(alice.address).then((isPlayer: boolean) => {
        expect(isPlayer).to.be.true;
      });

      await player.getBalance(alice.address).then((balance: BigNumber) => {
        expect(balance).to.eq(0);
      });
    });
  });

  describe('Balances', () => {
    beforeEach(async () => {
      await player.create();
      await player.setCashSpender(alice.address);
    });

    it('Should allow depositing of cash', async () => {
      await cash.mock.transferFrom.withArgs(alice.address, player.address, oneEther.mul(100)).returns(true);
      await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(100));

      await player.depositCash(oneEther.mul(100));

      await player.getBalance(alice.address).then((balance: BigNumber) => {
        expect(balance).to.eq(oneEther.mul(100));
      });
    });

    it('Should allow cash spending by Cash Spender', async () => {
      await cash.mock.transferFrom.withArgs(alice.address, player.address, oneEther.mul(100)).returns(true);
      await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(100));
      await cash.mock.burn.withArgs(oneEther.mul(50)).returns();

      await player.depositCash(oneEther.mul(100));

      await player.spendCash(alice.address, oneEther.mul(50));

      await player.getBalance(alice.address).then((balance: BigNumber) => {
        expect(balance).to.eq(oneEther.mul(50));
      });
    });

    describe('Restrictions', async () => {
      let bobConnectedPlayer: Player;

      beforeEach(async () => {
        bobConnectedPlayer = (await player.connect(bob)) as Player;
      });

      it('Should prevent deposits if balance is insufficient', async () => {
        await cash.mock.balanceOf.withArgs(alice.address).returns(oneEther.mul(50));

        await expect(player.depositCash(oneEther.mul(100))).to.be.revertedWith('Insufficient funds');

        await player.getBalance(alice.address).then((balance: BigNumber) => {
          expect(balance).to.eq(0);
        });
      });

      it('Should prevent cash spending by non Cash Spender', async () => {
        await expect(bobConnectedPlayer.spendCash(alice.address, oneEther.mul(50))).to.be.revertedWith(
          'Not Cash Spender'
        );
      });

      it('Should prevent setting cash address by non admin', async () => {
        await expect(bobConnectedPlayer.setCashAddress(bob.address)).to.be.revertedWith('Not Admin');
      });

      it('Should prevent setting player stats by non admin', async () => {
        await expect(bobConnectedPlayer.setPlayerStatsAddress(bob.address)).to.be.revertedWith('Not Admin');
      });

      it('Should prevent setting cash spender by non admin', async () => {
        await expect(bobConnectedPlayer.setCashSpender(bob.address)).to.be.revertedWith('Not Admin');
      });
    });
  });
});
