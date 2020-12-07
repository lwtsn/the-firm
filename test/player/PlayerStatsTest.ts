import { expect } from 'chai';
import { PlayerStats } from '../../typechain';
import { deployPlayerStatsContract, getProvider } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Player Stats', () => {
  let playerStats: PlayerStats;

  beforeEach(async () => {
    playerStats = await deployPlayerStatsContract(alice);
  });

  it('Should allow creation of player stats', async () => {
    await playerStats.createBasePlayer(alice.address);

    await playerStats.getPlayerStats(alice.address).then((stats: any) => {
      expect(stats.level).to.eq(1);
      expect(stats.experience).to.eq(0);
      expect(stats.baseHealth).to.eq(100);
      expect(stats.currentHealth).to.eq(100);
      expect(stats.baseStrength).to.eq(20);
      expect(stats.baseDexterity).to.eq(20);
      expect(stats.baseDefence).to.eq(20);
      expect(stats.baseConstitution).to.eq(20);
      expect(stats.isPlayer).to.eq(true);
    });
  });
});
