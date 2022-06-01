import { expect } from 'chai';
import { WeaponBase } from '../../../typechain';
import { getProvider } from '../../helpers/contract';
import { deployContract } from 'ethereum-waffle';
import WeaponBaseArtifact from '../../../artifacts/contracts/item/weapon/WeaponBase.sol/WeaponBase.json';
import { BigNumber } from 'ethers';

const [alice] = getProvider().getWallets();

// xdescribe('Wooden Stick', () => {
//   let woodenStick: WeaponBase;
//
//   beforeEach(async () => {
//     woodenStick = (await deployContract(alice, WeaponBaseArtifact, ['Wooden Stick', 'WdnStk', 20])) as WeaponBase;
//   });
//
//   it('Should allow creation of a player', async () => {
//     await woodenStick.name().then((name: string) => expect(name).to.eq('Wooden Stick'));
//     await woodenStick.symbol().then((name: string) => expect(name).to.eq('WdnStk'));
//     await woodenStick.damageBoost().then((name: BigNumber) => expect(name).to.eq(20));
//   });
// });
