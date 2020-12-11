import { expect } from 'chai';
import { Player, PlayerStats } from '../../typechain';
import { deployPlayerStatsContract, getProvider } from '../helpers/contract';
import { oneEther } from '../helpers/numbers';
import { BigNumber } from 'ethers';

const [alice, bob] = getProvider().getWallets();

describe('Player Stats', () => {
  let playerStats: PlayerStats;

  beforeEach(async () => {
    playerStats = await deployPlayerStatsContract(alice);
    await playerStats.setPlayerManager(alice.address);
  });

  it('Should allow creation of player stats', async () => {
    await playerStats.createBasePlayer(alice.address);

    await playerStats.getPlayerStats(alice.address).then((stats: any) => {
      expect(stats.level).to.eq(1);
      expect(stats.experience).to.eq(0);
      expect(stats.baseHealth).to.eq(100);
      expect(stats.currentHealth).to.eq(100);
      expect(stats.isPlayer).to.eq(true);
    });

    await playerStats.getPlayerBattleStats(alice.address).then((stats: any) => {
      expect(stats.baseStrength).to.eq(20);
      expect(stats.baseDexterity).to.eq(20);
      expect(stats.baseDefence).to.eq(20);
      expect(stats.baseConstitution).to.eq(20);
    });
  });

  describe('Restrictions', () => {
    let bobConnectedPlayerStats: PlayerStats;

    beforeEach(async () => {
      bobConnectedPlayerStats = (await playerStats.connect(bob)) as PlayerStats;
    });

    it('Should prevent setting the player manager unless by admin', async () => {
      await expect(bobConnectedPlayerStats.setPlayerManager(bob.address)).to.be.revertedWith('Not Admin');
    });

    it('Should prevent creating a new player unless player manager', async () => {
      await expect(bobConnectedPlayerStats.createBasePlayer(bob.address)).to.be.revertedWith('Not Player Manager');
    });

    it('Should prevent creating a new player if one already exists for address', async () => {
      await playerStats.createBasePlayer(alice.address);
      await expect(playerStats.createBasePlayer(alice.address)).to.be.revertedWith('Player already exists');
    });
  });
});
