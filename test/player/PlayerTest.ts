import { expect } from 'chai';
import { Cash, Player, PlayerStats } from '../../typechain';
import { deployPlayerContract, getProvider } from '../helpers/contract';
import CashArtifact from '../../artifacts/contracts/Cash.sol/Cash.json';
import PlayerStatsArtifact from '../../artifacts/contracts/player/PlayerStats.sol/PlayerStats.json';
import { deployMockContract, MockContract } from 'ethereum-waffle';

const [alice, bob] = getProvider().getWallets();

describe('Player', () => {
  let cash: Cash | MockContract;
  let playerStats: PlayerStats | MockContract;
  let player: Player;

  beforeEach(async () => {
    player = await deployPlayerContract(alice);
    cash = await deployMockContract(alice, CashArtifact.abi);
    playerStats = await deployMockContract(alice, PlayerStatsArtifact.abi);

    await player.setPlayerStatsAddress(playerStats.address);
  });

  describe('Player creation', () => {
    it('Should allow creation of a player', async () => {
      await playerStats.mock.createBasePlayer.withArgs(alice.address).returns();

      await player.create();

      await player.isPlayer(alice.address).then((isPlayer: boolean) => {
        expect(isPlayer).to.be.true;
      });
    });

    describe('Restrictions', () => {
      it('Should prevent creating the same player twice', async () => {
        await playerStats.mock.createBasePlayer.withArgs(alice.address).returns();

        await player.create();
        await expect(player.create()).to.be.revertedWith('Account already exists');
      });
    });
  });

  describe('Restrictions', async () => {
    let bobConnectedPlayer: Player;

    beforeEach(async () => {
      await playerStats.mock.createBasePlayer.withArgs(alice.address).returns();
      await player.create();

      bobConnectedPlayer = (await player.connect(bob)) as Player;
    });

    it('Should prevent setting player stats by non admin', async () => {
      await expect(bobConnectedPlayer.setPlayerStatsAddress(bob.address)).to.be.revertedWith('Not Admin');
    });
  });
});
