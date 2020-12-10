import { expect } from 'chai';
import { deployContract, deployMockContract, MockContract } from 'ethereum-waffle';
import { YieldFarm, Random } from '../../typechain';
import RandomArtifact from '../../artifacts/contracts/utils/Random.sol/Random.json';
import YieldFarmArtifact from '../../artifacts/contracts/activities/YieldFarm.sol/YieldFarm.json';

import { deployActivitiesContract, getBlockTime, getProvider, wait } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Activities', () => {
  let random: Random | MockContract;
  let yieldFarm: YieldFarm;

  beforeEach(async () => {
    random = await deployMockContract(alice, RandomArtifact.abi);
    yieldFarm = (await deployContract(alice, YieldFarmArtifact, [3600, 20, 50])) as YieldFarm;

    await yieldFarm.setRandomNumberGenerator(random.address);
  });

  it('Should allow creation of new the Yield Farm contract', async () => {
    await yieldFarm.getActivity().then((activity: any) => {
      expect(activity._name).to.eq('Yield farm');
      expect(activity._duration).to.eq(3600);
    });
  });

  it('Should reward an amount of Cash when successful', () => {
    await yieldFarm.complete();
  });
});
