import { deployContract, MockProvider } from 'ethereum-waffle';
import PlayerArtifact from '../../artifacts/contracts/Player.sol/Player.json';

import { Player } from '../../typechain';

import { Signer } from 'ethers';
import { ethers } from 'hardhat';

let provider: MockProvider;

export function getProvider() {
  if (provider == undefined) {
    provider = new MockProvider();
  }
  return provider;
}

export async function getAccounts() {
  return await ethers.getSigners();
}

export async function deployPlayerContract(signer: Signer) {
  return (await deployContract(signer, PlayerArtifact)) as Player;
}

export async function mineBlock() {
  await getProvider().send('evm_mine', []);
}

export async function wait(secondsToWait: number) {
  // Update the clock
  await getProvider().send('evm_increaseTime', [secondsToWait]);

  // Process the block
  await mineBlock();
}

export async function getBlockTime() {
  return await getProvider()
    .getBlock(getBlockNumber())
    .then((block) => block.timestamp);
}

export async function getBlockNumber() {
  return await getProvider().getBlockNumber();
}
