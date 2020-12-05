import { BigNumber, Contract } from 'ethers';
import { DAI_ADDRESS, TREASURY } from '../../deploy/constants';
import { Deployment } from 'hardhat-deploy/dist/types';
import DAI_ABI from '../../ABI/Erc20/DAI.json';
import { DAI_OWNER, ME } from '../constants';

const oneEther = BigNumber.from(1).mul(BigNumber.from(10).pow(18));

const hre = require('hardhat');

async function main() {
  console.log('Starting...');
  const { ethers } = hre;

  console.log('Hijacking account with DAI');
  await hre.network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [DAI_OWNER],
  });

  await hre.network.provider.request({
    method: 'hardhat_impersonateAccount',
    params: [ME],
  });

  console.log('Getting signer');
  let daiOwner = await hre.ethers.provider.getSigner(DAI_OWNER);

  console.log('Sending Eth to me');
  await daiOwner.sendTransaction({
    from: DAI_OWNER,
    value: oneEther.mul(4000),
    to: ME,
  });

  await daiOwner.sendTransaction({
    from: DAI_OWNER,
    value: oneEther.mul(4000),
    to: '0xb041dfF14Ba9607d3f0B6fC61C79584d3BBE63C9',
  });

  console.log('Getting signer');
  let me = await hre.ethers.provider.getSigner(ME);

  console.log('Connecting to Treasury');
  const treasury = await hre.deployments.get(TREASURY).then(async (deployment: Deployment) => {
    return await ethers.getContractAt(deployment.abi, deployment.address).then(async (contract: Contract) => {
      return contract.connect(me);
    });
  });

  console.log('Connecting to DAI');
  const dai = await hre.ethers.getContractAt(DAI_ABI, DAI_ADDRESS, daiOwner);
  const meDai = await hre.ethers.getContractAt(DAI_ABI, DAI_ADDRESS, me);

  const amount = oneEther.mul(10000);

  dai.transfer(ME, amount.mul(200));

  console.log('Approving Treasury to take Dai');
  await meDai.approve(treasury.address, amount);

  console.log('Depositing 10,000 dai to Treasury');
  await treasury.deposit(dai.address, amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
