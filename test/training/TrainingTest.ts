import { PlayerStats, Training } from '../../typechain';
import { deployTrainingContract, getBlockTime, getProvider } from '../helpers/contract';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import PlayerStatsArtifact from '../../artifacts/contracts/player/PlayerStats.sol/PlayerStats.json';
import { expect } from 'chai';
import { oneEther } from '../helpers/numbers';

const [alice] = getProvider().getWallets();

describe('Training', () => {
  let training: Training;
  let playerStats: PlayerStats | MockContract;

  before(async () => {
    playerStats = await deployMockContract(alice, PlayerStatsArtifact.abi);
    training = await deployTrainingContract(alice);
    await training.setPlayerStats(playerStats.address);

    await playerStats.mock.getPlayerBattleStats
      .withArgs(alice.address)
      .returns(oneEther.mul(20), oneEther.mul(20), oneEther.mul(20), oneEther.mul(20));
  });

  it('Should allow training to be started and finished', async () => {
    await training.start(1, 0);

    await training.callStatic.trainingMapping(alice.address).then(async (training: any) => {
      const blockTime = await getBlockTime();
      expect(training.stat).to.eq(1);
      expect(training.startTime).to.eq(blockTime);
      expect(training.stopTime).to.eq(blockTime + 3600);
      expect(training.isTraining).to.eq(true);
    });

    await playerStats.mock.increaseBattleStats.withArgs(alice.address, '6000000000000000', 0, 0, 0).returns();

    await training.finish();

    await training.trainingMapping(alice.address).then(async (training: any) => {
      expect(training.stat).to.eq(0);
      expect(training.startTime).to.eq(0);
      expect(training.stopTime).to.eq(0);
      expect(training.isTraining).to.eq(false);
    });
  });

  describe('Training skills', () => {
    afterEach(async () => {
      await training.finish();
    });

    it('Training Strength for 2 hours', async () => {
      await training.start(1, 1);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, '12000000000000000', 0, 0, 0).returns();
    });

    it('Training Dexterity for 4 hours', async () => {
      await training.start(2, 2);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, '24480000000000000', 0, 0).returns();
    });

    it('Training Defence for 8 hours', async () => {
      await training.start(3, 3);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, 0, '49920000000000000', 0).returns();
    });

    it('Training Constitution for 12 hours', async () => {
      await training.start(4, 4);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, 0, 0, '76320000000000000').returns();
    });

    it('Training Strength for 1 day', async () => {
      await training.start(1, 5);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, '155520000000000000', 0, 0, 0).returns();
    });

    it('Training Dexterity for 2 days', async () => {
      await training.start(2, 6);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, '316800000000000000', 0, 0).returns();
    });

    it('Training Defence for 4 days', async () => {
      await training.start(3, 7);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, 0, '691200000000000000', 0).returns();
    });

    it('Training Constitution for 1 week', async () => {
      await training.start(4, 8);
      await playerStats.mock.increaseBattleStats.withArgs(alice.address, 0, 0, 0, '1260000000000000000').returns();
    });
  });
});
