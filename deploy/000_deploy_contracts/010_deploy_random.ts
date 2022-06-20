import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { RANDOM } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();

  log('Deploying Random Contract...');
  await deploy(RANDOM, { from: deployer, log: true });
};

export default func;

func.tags = [RANDOM];
