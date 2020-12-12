import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { PLAYER, PLAYER_STATS } from './constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const playerStats = await deployments.get(PLAYER_STATS);

  console.log('Setting setting player stats address: ' + playerStats.address);
  await execute(PLAYER, { from: deployer, log: true }, 'setPlayerStatsAddress', playerStats.address);
};

export default func;

func.tags = [PLAYER];
