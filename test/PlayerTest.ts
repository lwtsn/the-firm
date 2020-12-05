import { expect } from 'chai';
import { FundManager } from '../typechain';
import { deployFundManager, getProvider } from './helpers/contract';
import { oneEther } from './helpers/numbers';
import { BigNumber } from 'ethers';

const [alice] = getProvider().getWallets();

describe('Account', () => {
  let fundManager: FundManager;

  beforeEach(async () => {
    fundManager = await deployFundManager(alice);
  });

  it('Should allow funds to be deposited', async () => {
    await fundManager.deposit({ value: oneEther });

    await getProvider()
      .getBalance(fundManager.address)
      .then((balance: BigNumber) => expect(balance).to.eq(oneEther));
  });
});
