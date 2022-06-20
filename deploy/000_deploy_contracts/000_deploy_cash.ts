import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { CASH } from '../constants';
import { oneEther } from '../../test/helpers/numbers';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, log, execute } = deployments;

  const { deployer } = await getNamedAccounts();

  log('Deploying Cash Contract...');
  await deploy(CASH, {
    from: deployer,
    log: true,
  });

  await execute(CASH, { from: deployer, log: true }, 'setCashMinter', deployer);
  await execute(CASH, { from: deployer, log: true }, 'mint', deployer, oneEther.mul(50000));
};

export default func;

func.tags = [CASH];
