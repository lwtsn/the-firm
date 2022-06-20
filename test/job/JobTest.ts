import { expect } from 'chai';
import { Jobs } from '../../typechain';
import { deployJobContract, getAccounts } from '../helpers/contract';
import { BigNumber } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('Jobs', () => {
  let job: Jobs;
  let alice: SignerWithAddress;

  beforeEach(async () => {
    [alice] = await getAccounts();
    job = await deployJobContract(alice);
  });

  it('Should allow a new industry to be created', async () => {
    let name = 'Degenerate';

    await expect(job.listJobIndustry(name)).to.emit(job, 'IndustryCreated').withArgs(0, name);

    await job.industries(0).then((industry: any) => {
      expect(industry.listPointer).to.eq(0);
      expect(industry.name).to.eq(name);
    });
  });

  it('Should allow a new job to be created', async () => {
    const salary = BigNumber.from(10000);
    const statsRequired = { chadary: BigNumber.from(1), degeneracy: BigNumber.from(2), unrekable: BigNumber.from(3) };
    const statsDailyIncrease = {
      chadary: BigNumber.from(4),
      degeneracy: BigNumber.from(5),
      unrekable: BigNumber.from(6),
    };

    await job.listJobIndustry('Industry');
    await expect(job.listJob(salary, 0, statsRequired, statsDailyIncrease))
      .to.emit(job, 'JobCreated')
      .withArgs(
        0,
        salary,
        0,
        [statsRequired.chadary, statsRequired.degeneracy, statsRequired.unrekable],
        [statsDailyIncrease.chadary, statsDailyIncrease.degeneracy, statsDailyIncrease.unrekable]
      );

    await job.isEntity(0).then((isJob: boolean) => {
      expect(isJob).to.be.true;
    });

    await job.getJobCount().then((jobCount: BigNumber) => {
      expect(jobCount).to.eq(1);
    });

    await job.jobs(0).then((job: any) => {
      expect(job.salary).to.eq(salary);
      expect(job.industry).to.eq(0);

      expect(job.statsRequired.chadary).to.eq(1);
      expect(job.statsRequired.degeneracy).to.eq(2);
      expect(job.statsRequired.unrekable).to.eq(3);

      expect(job.statsDailyIncrease.chadary).to.eq(4);
      expect(job.statsDailyIncrease.degeneracy).to.eq(5);
      expect(job.statsDailyIncrease.unrekable).to.eq(6);
    });
  });
});
