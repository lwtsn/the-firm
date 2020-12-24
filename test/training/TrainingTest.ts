import { PlayerStats, Training } from '../../typechain';
import { deployTrainingContract, getBlockTime, getProvider } from '../helpers/contract';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import PlayerStatsArtifact from '../../artifacts/contracts/player/PlayerStats.sol/PlayerStats.json';
import { expect } from 'chai';

const [alice] = getProvider().getWallets();

describe('Training', () => {
  let training: Training;
  let playerStats: PlayerStats | MockContract;

  beforeEach(async () => {
    playerStats = await deployMockContract(alice, PlayerStatsArtifact.abi);
    training = await deployTrainingContract(alice);
    await training.setPlayerStats(playerStats.address);
  });

  it('Should allow training to be started', async () => {
    await training.trainStrength(0);

    await training.trainingMapping(alice.address).then(async (training: any) => {
      const blockTime = await getBlockTime();

      expect(training.stat).to.eq(1);
      expect(training.startTime).to.eq(blockTime);
      expect(training.stopTime).to.eq(blockTime + 3600);
      expect(training.isTraining).to.eq(true);
    });
  });
});
