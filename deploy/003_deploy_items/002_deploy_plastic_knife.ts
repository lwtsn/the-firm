import { SHOP } from '../constants';
import { oneEther } from '../../test/helpers/numbers';
import { deployWeapon } from './deploy_weapon';

const name = 'Plastic Knife';
const damageBoost = 3;
const cost = oneEther.mul(80);

const func = deployWeapon(name, damageBoost, cost);
export default func;

func.tags = [SHOP];
