import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { CASH, PLAYER_STATS, RANDOM, SCHEME_MANAGER, TREASURY } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const randomNumberGenerator = await deployments.get(RANDOM);
  const cash = await deployments.get(CASH);
  const treasure = await deployments.get(TREASURY);
  const playerStats = await deployments.get(PLAYER_STATS);

  console.log('Connecting Random Number Generator to Scheme manager : ' + randomNumberGenerator.address);
  await execute(
    SCHEME_MANAGER,
    { from: deployer, log: true },
    'setRandomNumberGenerator',
    randomNumberGenerator.address
  );
  console.log('Connecting Treasury to Scheme manager : ' + treasure.address);
  await execute(SCHEME_MANAGER, { from: deployer, log: true }, 'setTreasury', treasure.address);

  console.log('Connecting Cash to Scheme manager : ' + cash.address);
  await execute(SCHEME_MANAGER, { from: deployer, log: true }, 'setCashContract', cash.address);

  console.log('Connecting Player Stats to Scheme manager : ' + playerStats.address);
  await execute(SCHEME_MANAGER, { from: deployer, log: true }, 'setPlayerStats', playerStats.address);
};

export default func;

func.tags = [SCHEME_MANAGER];
