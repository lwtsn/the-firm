import { expect } from 'chai';
import { PlayerStats } from '../../typechain';
import { deployPlayerStatsContract, getAccounts } from '../helpers/contract';
import { oneEther } from '../helpers/numbers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('Player Stats', () => {
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  let playerStats: PlayerStats;

  beforeEach(async () => {
    [alice, bob] = await getAccounts();

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
      const defaultStat = oneEther.mul(20);

      expect(stats.baseStrength).to.eq(defaultStat);
      expect(stats.baseDexterity).to.eq(defaultStat);
      expect(stats.baseDefence).to.eq(defaultStat);
      expect(stats.baseConstitution).to.eq(defaultStat);
    });

    await playerStats.getPlayerFarmingStats(alice.address).then((stats: any) => {
      expect(stats._degeneracy).to.eq(0);
      expect(stats._chadary).to.eq(0);
      expect(stats._unrekable).to.eq(0);
    });
  });
  it('Should allow player farming stats to be increased', async () => {
    await playerStats.createBasePlayer(alice.address);

    await playerStats.increaseFarmingStats(alice.address, 40, 40, 40);

    await playerStats.getPlayerFarmingStats(alice.address).then((stats: any) => {
      expect(stats._degeneracy).to.eq(40);
      expect(stats._chadary).to.eq(40);
      expect(stats._unrekable).to.eq(40);
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

    it('Should prevent increasing farming stats for non player managers', async () => {
      await expect(playerStats.increaseFarmingStats(bob.address, 40, 40, 40)).to.be.revertedWith(
        "Player doesn't exist"
      );
    });

    it('Should prevent increasing farming stats for non player', async () => {
      await expect(bobConnectedPlayerStats.increaseFarmingStats(bob.address, 40, 40, 40)).to.be.revertedWith(
        'Not Player Manager'
      );
    });

    it('Should prevent creating a new player if one already exists for address', async () => {
      await playerStats.createBasePlayer(alice.address);
      await expect(playerStats.createBasePlayer(alice.address)).to.be.revertedWith('Player already exists');
    });
  });
});
