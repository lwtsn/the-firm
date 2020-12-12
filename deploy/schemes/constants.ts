import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

export const SCHEMES = 'Schemes';
export const SCHEME_YIELD_FARM = 'YieldFarm';
export const SCHEME_SCROUNGE_FOR_SATOSHIS = 'ScroungeForSatochis';
export const SCHEME_TEST = 'TestScheme';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {};

export default func;
