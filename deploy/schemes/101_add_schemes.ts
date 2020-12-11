import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { SCHEMES, SCHEME_SCROUNGE_FOR_SATOSHIS, SCHEME_YIELD_FARM } from './constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const yieldFarm = await deployments.get(SCHEME_YIELD_FARM);
  const scroungeForSatoshis = await deployments.get(SCHEME_SCROUNGE_FOR_SATOSHIS);

  console.log('Setting setting Yield Farm as scheme: ' + yieldFarm.address);
  await execute(SCHEMES, { from: deployer, log: true }, 'addScheme', yieldFarm.address);

  console.log('Setting setting Scrounge For Satoshis as scheme: ' + scroungeForSatoshis.address);
  await execute(SCHEMES, { from: deployer, log: true }, 'addScheme', scroungeForSatoshis.address);
};

export default func;

func.tags = [SCHEMES];
