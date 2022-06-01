import { HardhatUserConfig } from 'hardhat/config';
import environment from './config';

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';

import 'hardhat-deploy';

import 'hardhat-spdx-license-identifier';

import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    root: './',
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: 'https://eth-mainnet.alchemyapi.io/v2/' + environment.alchemyKey,
      },
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/" + environment.infuraKey,
    //   accounts: [environment.privateKey],
    // },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      ropsten: '0x40aB75676527ec9830fEAc40e525764405453914',
    },
    admin: {
      default: 0,
      ropsten: '0x40aB75676527ec9830fEAc40e525764405453914',
    },
    proxyOwner: 1,
  },
  etherscan: {
    apiKey: environment.etherScanKey,
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};

export default config;
