import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Baseball Bat';
const damageBoost = 35;
const cost = oneEther.mul(1300);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
