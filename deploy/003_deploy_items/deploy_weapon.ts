import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ITEM_BASE, SHOP } from '../constants';
import { BigNumber } from 'ethers';

export function deployWeapon(name: string, damageBoost: number, cost: BigNumber) {
  const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { read, execute } = deployments;

    const { deployer } = await getNamedAccounts();

    console.log('Creating ' + name);
    await execute(ITEM_BASE, { from: deployer, log: true }, 'createNewItem', name);

    const itemId = await read(ITEM_BASE, { from: deployer }, 'nextItemId');

    console.log(`Adding ${name} to shop with id ${itemId}..`);
    await execute(SHOP, { from: deployer, log: true }, 'list', itemId, cost);
  };

  return func;
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {};

export default func;
