import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { PLAYER, SCHEME_SCROUNGE_FOR_SATOSHIS, SCHEME_TEST, SCHEME_YIELD_FARM, SCHEMES } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const player = await deployments.get(PLAYER);

  console.log('Setting player for Yield Farm: ' + player.address);
  await execute(SCHEME_YIELD_FARM, { from: deployer, log: true }, 'setPlayer', player.address);

  console.log('Setting player for Scrounge For Satoshis: ' + player.address);
  await execute(SCHEME_SCROUNGE_FOR_SATOSHIS, { from: deployer, log: true }, 'setPlayer', player.address);

  console.log('Setting player for Test Scheme: ' + player.address);
  await execute(SCHEME_TEST, { from: deployer, log: true }, 'setPlayer', player.address);
};

export default func;

func.tags = [SCHEMES];
