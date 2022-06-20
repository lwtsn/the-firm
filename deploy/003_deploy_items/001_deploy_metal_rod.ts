import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Metal Rod';
const damageBoost = 30;
const cost = oneEther.mul(1200);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
