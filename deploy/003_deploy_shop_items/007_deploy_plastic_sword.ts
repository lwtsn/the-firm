import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Plastic Sword';
const damageBoost = 5;
const cost = oneEther.mul(175);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
