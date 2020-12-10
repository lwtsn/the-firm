import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ACTIVITIES, ACTIVITY_SCROUNGE_FOR_SATOSHIS, ACTIVITY_YIELD_FARM } from './constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const yieldFarm = await deployments.get(ACTIVITY_YIELD_FARM);
  const scroungeForSatoshis = await deployments.get(ACTIVITY_SCROUNGE_FOR_SATOSHIS);

  console.log('Setting setting Yield Farm as activity: ' + yieldFarm.address);
  await execute(ACTIVITIES, { from: deployer, log: true }, 'addActivity', yieldFarm.address);

  console.log('Setting setting Scrounge For Satoshis as activity: ' + scroungeForSatoshis.address);
  await execute(ACTIVITIES, { from: deployer, log: true }, 'addActivity', scroungeForSatoshis.address);
};

export default func;

func.tags = [ACTIVITIES];
