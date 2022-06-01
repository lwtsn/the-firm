import { waffle } from 'hardhat';

import { Cash, Random, Treasury, YieldFarm } from '../../typechain';
import RandomArtifact from '../../artifacts/contracts/utils/Random.sol/Random.json';
import YieldFarmArtifact from '../../artifacts/contracts/Schemes/YieldFarm.sol/YieldFarm.json';
import CashArtifact from '../../artifacts/contracts/Cash.sol/Cash.json';
import TreasuryArtifact from '../../artifacts/contracts/player/Treasury.sol/Treasury.json';

import { getProvider } from '../helpers/contract';
import { MAX_INT } from '../helpers/numbers';
import { expect } from 'chai';
import { MockContract } from 'ethereum-waffle';

const { deployMockContract, deployContract } = waffle;

const [alice] = getProvider().getWallets();

describe('Yield farm', () => {
  let random: Random | MockContract;
  let cash: Cash | MockContract;
  let treasury: Treasury | MockContract;
  let yieldFarm: YieldFarm;

  const duration = 3600;
  const experience = 20;
  const chanceOfSuccess = 50;
  const baseEarning = 1;
  const earningBonus = 2;

  beforeEach(async () => {
    random = await deployMockContract(alice, RandomArtifact.abi);
    treasury = await deployMockContract(alice, TreasuryArtifact.abi);
    cash = await deployMockContract(alice, CashArtifact.abi);

    yieldFarm = (await deployContract(alice, YieldFarmArtifact, [
      duration,
      experience,
      chanceOfSuccess,
      baseEarning,
      earningBonus,
    ])) as YieldFarm;

    await yieldFarm.setRandomNumberGenerator(random.address);
    await yieldFarm.setTreasury(treasury.address);

    await cash.mock.approve.withArgs(treasury.address, MAX_INT).returns(true);
    await yieldFarm.setCashContract(cash.address);
  });

  it('Should allow creation of new the Yield Farm contract', async () => {
    await yieldFarm.getScheme().then((Scheme: any) => {
      expect(Scheme._name).to.eq('Yield farm');
      expect(Scheme._duration).to.eq(duration);
    });
  });

  it('Should reward an amount of Cash when successful', async () => {
    await random.random.withArgs(100).returns(49);
    await cash.mint.withArgs(yieldFarm.address, 33).returns();
    await treasury.depositCashTo.withArgs(alice.address, 33).returns();

    await yieldFarm.complete(alice.address);
  });
});
