import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Chancleta';
const damageBoost = 15;
const cost = oneEther.mul(700);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
