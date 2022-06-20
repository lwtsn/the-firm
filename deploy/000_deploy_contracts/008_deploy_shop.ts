import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ITEM_BASE, SHOP } from '../constants';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log, execute, get } = deployments;

  const { deployer } = await getNamedAccounts();

  log('Deploying Shop Contract...');
  await deploy(SHOP, {
    from: deployer,
    log: true,
  });

  const itemBase = await get(ITEM_BASE);

  await execute(
    SHOP,
    {
      from: deployer,
      log: true,
    },
    'setItemContract',
    itemBase.address
  );
};

export default func;

func.tags = [SHOP];
