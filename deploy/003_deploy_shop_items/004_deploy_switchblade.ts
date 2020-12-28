import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Switchblade';
const damageBoost = 25;
const cost = oneEther.mul(900);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
