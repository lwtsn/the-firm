import { expect } from 'chai';
import { Cash } from '../typechain';
import { deployCashContract, getProvider } from './helpers/contract';

const [alice] = getProvider().getWallets();

describe('Account', () => {
  let cash: Cash;

  beforeEach(async () => {
    cash = await deployCashContract(alice);
  });

  it('Should allow deployment of cash contract', async () => {
    await cash.name().then((name: string) => expect(name).to.eq('CASH'));
    await cash.symbol().then((name: string) => expect(name).to.eq('CA$H'));
  });
});
