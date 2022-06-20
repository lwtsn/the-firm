import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ITEM_BASE, SHOP } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log } = deployments;

  const { deployer } = await getNamedAccounts();

  log('Deploying Base Item Contract...');
  await deploy(ITEM_BASE, {
    from: deployer,
    log: true,
  });
};

export default func;

func.tags = [SHOP];
