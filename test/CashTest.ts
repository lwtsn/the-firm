import { expect } from 'chai';
import { Cash } from '../typechain';
import { deployCashContract, getAccounts } from './helpers/contract';

describe('Account', () => {
  let cash: Cash;

  beforeEach(async () => {
    const [alice] = await getAccounts();

    cash = await deployCashContract(alice);
  });

  it('Should allow deployment of cash contract', async () => {
    await cash.name().then((name: string) => expect(name).to.eq('CASH'));
    await cash.symbol().then((name: string) => expect(name).to.eq('CA$H'));
  });
});
