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
    yieldFarm = await deployContract(alice, YieldFarmArtifact, [3600, 20, 50]);

    await yieldFarm.setRandomNumberGenerator(random.address);
  });

  it('Should allow creation of new the Yield Farm contract', async () => {
    await yieldFarm.getActivity(1).then((activity: any) => {
      expect(activity.name).to.eq(name);
      expect(activity.duration).to.eq(duration);
      expect(activity.experience).to.eq(experience);
      expect(activity.successChance).to.eq(successChance);
    });
  });

  // it('Should allow activities to be started', async () => {
  //   let { duration } = await createActivity();
  //
  //   await activities.startActivity(1);
  //
  //   let time = await getBlockTime();
  //
  //   await activities.ongoingActivities(alice.address).then((activity: any) => {
  //     expect(activity.hasActiveActivity).to.eq(true);
  //     expect(activity.activity).to.eq(1);
  //     expect(activity.timeStarted).to.eq(time);
  //     expect(activity.timeCompleting).to.eq(time + duration);
  //   });
  // });
  //
  // it('Should allow activities to be completed', async () => {
  //   await createActivity();
  //   await activities.startActivity(1);
  //
  //   await random.mock.random.withArgs(100).returns(25);
  //
  //   await wait(3600);
  //
  //   await activities.completeActivity(1);
  // });
});
