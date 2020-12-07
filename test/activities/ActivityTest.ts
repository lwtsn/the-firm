import { expect } from 'chai';
import { Activities } from '../../typechain';
import { deployActivitiesContract, getProvider } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Activities', () => {
  let activities: Activities;

  beforeEach(async () => {
    activities = await deployActivitiesContract(alice);
  });

  it('Should allow creation of new Activities', async () => {
    let name = 'Fomo into new yield farming opportunity';
    let duration = 3600;
    let experience = 10;
    let successChance = 33;

    await activities.addActivity(name, duration, experience, successChance);

    await activities.getActivity(1).then((activity) => {
      expect(activity.name).to.eq(name);
      expect(activity.duration).to.eq(duration);
      expect(activity.experience).to.eq(experience);
      expect(activity.successChance).to.eq(successChance);
    });
  });
});
