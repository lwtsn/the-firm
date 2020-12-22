import { HardhatUserConfig } from 'hardhat/config';
import environment from './config';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';

import 'hardhat-typechain';

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.6.8',
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
        enabled: false,
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
};

export default config;
