import { ItemBase, Player, Shop } from '../typechain';
import { deployShopContract, getProvider } from './helpers/contract';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import ItemArtifact from '../artifacts/contracts/item/ItemBase.sol/ItemBase.json';
import PlayerArtifact from '../artifacts/contracts/Player.sol/Player.json';
import { oneEther } from './helpers/numbers';
import { expect } from 'chai';
import { BigNumber } from 'ethers';

const [alice] = getProvider().getWallets();

describe('Shop', () => {
  let shop: Shop;
  let item: ItemBase | MockContract;
  let player: Player | MockContract;

  beforeEach(async () => {
    shop = await deployShopContract(alice);

    item = await deployMockContract(alice, ItemArtifact.abi);
    player = await deployMockContract(alice, PlayerArtifact.abi);

    await shop.setPlayerContract(player.address);
  });

  it('Should allow listing of items', async () => {
    await shop.list(item.address, oneEther.mul(100));

    await shop.getItem(item.address).then((price: BigNumber) => {
      expect(price).to.eq(oneEther.mul(100));
    });
  });

  describe('Item purchasing', () => {
    it('Should allow purchasing of registered items', async () => {
      await player.mock.getBalance.withArgs(alice.address).returns(oneEther.mul(200));
      await item.mock.mint.withArgs(alice.address, 1).returns();

      await shop.list(item.address, oneEther.mul(100));

      await shop.purchase(item.address, 1);
    });

    it('Should prevent purchasing items if player balance is too low', async () => {
      await player.mock.getBalance.withArgs(alice.address).returns(oneEther.mul(200));
      await item.mock.mint.withArgs(alice.address, 4).returns();

      await shop.list(item.address, oneEther.mul(100));

      expect(shop.purchase(item.address, 4)).to.be.revertedWith('Not enough funds');
    });
  });
});
