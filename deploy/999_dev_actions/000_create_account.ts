import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { PLAYER, PLAYER_STATS } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log('Creating account... ');
  await execute(PLAYER, { from: deployer, log: true }, 'create');
};

export default func;

func.tags = [PLAYER_STATS];
