import { waffle } from 'hardhat';

import { YieldFarm } from '../../typechain';
import RandomArtifact from '../../artifacts/contracts/utils/Random.sol/Random.json';
import YieldFarmArtifact from '../../artifacts/contracts/Schemes/YieldFarm.sol/YieldFarm.json';
import CashArtifact from '../../artifacts/contracts/Cash.sol/Cash.json';
import TreasuryArtifact from '../../artifacts/contracts/player/Treasury.sol/Treasury.json';

import { getAccounts } from '../helpers/contract';
import { expect } from 'chai';
import { MockContract } from 'ethereum-waffle';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const { deployMockContract, deployContract } = waffle;

describe('Yield farm', () => {
  let random: MockContract;
  let cash: MockContract;
  let treasury: MockContract;
  let yieldFarm: YieldFarm;

  let alice: SignerWithAddress;

  const duration = 3600;
  const experience = 20;
  const chanceOfSuccess = 50;
  const baseEarning = 1;
  const earningBonus = 2;

  beforeEach(async () => {
    [alice] = await getAccounts();

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
  });

  it('Should allow creation of new the Yield Farm contract', async () => {
    await yieldFarm.getScheme().then((Scheme: any) => {
      expect(Scheme._name).to.eq('Yield farm');
      expect(Scheme._duration).to.eq(duration);
    });
  });

  it('Should reward an amount of Cash when successful', async () => {
    await random.mock.random.withArgs(100).returns(49);
    await cash.mock.mint.withArgs(yieldFarm.address, 33).returns();
    await treasury.depositCashTo.withArgs(alice.address, 33).returns();

    await yieldFarm.complete(alice.address);
  });
});
