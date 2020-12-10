import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { ACTIVITY_YIELD_FARM } from './constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();

  const duration = 43200;
  const experience = 500;
  const chanceOfSuccess = 33;
  const baseEarning = 1000;
  const earningBonus = 750;

  log('Deploying Activity Yield Farm...');
  await deploy(ACTIVITY_YIELD_FARM, {
    from: deployer,
    log: true,
    args: [duration, experience, chanceOfSuccess, baseEarning, earningBonus],
  });
};

export default func;

func.tags = [ACTIVITY_YIELD_FARM];
