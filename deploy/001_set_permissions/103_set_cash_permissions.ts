import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { CASH, PLAYER_STATS, SCHEME_MANAGER } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const schemeManager = await deployments.get(SCHEME_MANAGER);

  console.log('Setting Scheme Manager as Cash minter : ' + schemeManager.address);
  await execute(CASH, { from: deployer, log: true }, 'setCashMinter', schemeManager.address);
};

export default func;

func.tags = [PLAYER_STATS];
