import { expect } from 'chai';
import { Cash, Player } from '../typechain';
import { deployPlayerContract, getProvider } from './helpers/contract';
import CashArtifact from '../artifacts/contracts/Cash.sol/Cash.json';

import { oneEther } from './helpers/numbers';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { BigNumber } from 'ethers';

const [alice] = getProvider().getWallets();

describe('Account', () => {
  let cash: Cash | MockContract;
  let player: Player;

  beforeEach(async () => {
    player = await deployPlayerContract(alice);
    cash = await deployMockContract(alice, CashArtifact.abi);

    await player.setCash(cash.address);
  });

  it('Should allow creation of a player', async () => {
    await player.create();

    await player.isPlayer(alice.address).then((isPlayer: boolean) => {
      expect(isPlayer).to.be.true;
    });
  });

  it('Should allow depositing of cash', async () => {
    await player.create();

    await cash.mock.transferFrom.withArgs(alice.address, player.address, oneEther.mul(100)).returns(true);

    await player.depositCash(oneEther.mul(100));

    await player.getBalance(alice.address).then((balance: BigNumber) => {
      expect(balance).to.eq(balance);
    });
  });
});
