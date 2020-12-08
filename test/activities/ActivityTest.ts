import { expect } from 'chai';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { Activities, BaseActivity } from '../../typechain';
import BaseActivityArtifact from '../../artifacts/contracts/activities/BaseActivity.sol/BaseActivity.json';

import { deployActivitiesContract, getBlockTime, getProvider, wait } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Activities', () => {
  let activity: BaseActivity | MockContract;
  let activities: Activities;

  beforeEach(async () => {
    activity = await deployMockContract(alice, BaseActivityArtifact.abi);
    activities = await deployActivitiesContract(alice);
  });

  it('Should allow creation of new Activities', async () => {
    await activities.addActivity(activity.address);

    await activities.activities(1).then((fetchedActivity: any) => {
      expect(fetchedActivity.activityAddress).to.eq(activity.address);
    });
  });

  describe('Performing activity', () => {
    let duration = 3600;

    beforeEach(async () => {
      await activities.addActivity(activity.address);

      await activity.mock.start.returns();
      await activity.mock.duration.returns(duration);
    });

    it('Should allow activities to be started', async () => {
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
      await activities.startActivity(1);
      await activity.mock.complete.returns();

      await wait(3600);

      await activities.completeActivity(1);

      await activities.ongoingActivities(alice.address).then((activity: any) => {
        expect(activity.hasActiveActivity).to.eq(false);
        expect(activity.activity).to.eq(0);
        expect(activity.timeStarted).to.eq(0);
        expect(activity.timeCompleting).to.eq(0);
      });
    });

    it('Should prevent starting an activity if one is already in progress', async () => {
      await activities.startActivity(1);
      await expect(activities.startActivity(1)).to.be.revertedWith('An activity is already in progress');
    });

    it('Should prevent starting an invalid activity', async () => {
      await expect(activities.startActivity(999)).to.be.revertedWith('Invalid activity chosen');
    });

    it('Should prevent completing an activity if one is not in progress', async () => {
      await expect(activities.completeActivity(1)).to.be.revertedWith('No activity in progress');
    });

    it('Should prevent completing an activity before it the duration has passed', async () => {
      await activities.startActivity(1);

      await expect(activities.completeActivity(1)).to.be.revertedWith('Activity is not complete');
    });
  });
});
