import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { ACTIVITIES } from './constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();

  log('Deploying Activity Manager...');
  await deploy(ACTIVITIES, {
    from: deployer,
    log: true,
  });
};

export default func;

func.tags = [ACTIVITIES];
