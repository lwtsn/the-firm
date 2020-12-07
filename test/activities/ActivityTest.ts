import { expect } from 'chai';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { Activities, Random } from '../../typechain';
import RandomArtifact from '../../artifacts/contracts/utils/Random.sol/Random.json';

import { deployActivitiesContract, getBlockTime, getProvider, wait } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Activities', () => {
  let random: Random | MockContract;
  let activities: Activities;

  beforeEach(async () => {
    random = await deployMockContract(alice, RandomArtifact.abi);
    activities = await deployActivitiesContract(alice);
    await activities.setRandomNumberGenerator(random.address);
  });

  it('Should allow creation of new Activities', async () => {
    let { name, duration, experience, successChance } = await createActivity();

    await activities.getActivity(1).then((activity) => {
      expect(activity.name).to.eq(name);
      expect(activity.duration).to.eq(duration);
      expect(activity.experience).to.eq(experience);
      expect(activity.successChance).to.eq(successChance);
    });
  });

  it('Should allow activities to be started', async () => {
    let { duration } = await createActivity();

    await activities.startActivity(1);

    let time = await getBlockTime();

    await activities.ongoingActivities(alice.address).then((activity: any) => {
      expect(activity.hasActiveActivity).to.eq(true);
      expect(activity.activity).to.eq(1);
      expect(activity.timeStarted).to.eq(time);
      expect(activity.timeCompleting).to.eq(time + duration);
    });
  });

  it('Should allow activities to be completed', async () => {
    await createActivity();
    await activities.startActivity(1);

    await random.mock.random.withArgs(100).returns(25);

    await wait(3600);

    await activities.completeActivity(1);
  });

  async function createActivity() {
    let name = 'Fomo into new yield farming opportunity';
    let duration = 3600;
    let experience = 10;
    let successChance = 50;

    await activities.addActivity(name, duration, experience, successChance);
    return { name, duration, experience, successChance };
  }
});
