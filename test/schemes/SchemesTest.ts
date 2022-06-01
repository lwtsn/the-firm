import { expect } from 'chai';
import { MockContract } from 'ethereum-waffle';
import { SchemeManager, YieldFarm } from '../../typechain';
import BaseSchemeArtifact from '../../artifacts/contracts/schemes/BaseScheme.sol/BaseScheme.json';
import { waffle } from 'hardhat';

import { deploySchemesContract, getBlockTime, getProvider, wait } from '../helpers/contract';

const { deployMockContract } = waffle;

const [alice] = getProvider().getWallets();

describe('Scheme Manager', () => {
  let scheme: YieldFarm | MockContract;
  let schemeManager: SchemeManager;

  beforeEach(async () => {
    scheme = await deployMockContract(alice, BaseSchemeArtifact.abi);
    schemeManager = await deploySchemesContract(alice);
  });

  it('Should allow creation of new Schemes', async () => {
    await schemeManager.addScheme(scheme.address);

    await schemeManager.schemes(1).then((fetchedScheme: any) => {
      expect(fetchedScheme.schemeAddress).to.eq(scheme.address);
    });
  });

  it('Should create a list of all active schemes', async () => {
    let scheme2 = await deployMockContract(alice, BaseSchemeArtifact.abi);
    let scheme3 = await deployMockContract(alice, BaseSchemeArtifact.abi);

    await schemeManager.addScheme(scheme.address);
    await schemeManager.addScheme(scheme2.address);
    await schemeManager.addScheme(scheme3.address);

    await schemeManager.listSchemes().then((schemes: boolean[]) => {
      expect(schemes[0]).to.be.false;
      expect(schemes[1]).to.be.true;
      expect(schemes[2]).to.be.true;
      expect(schemes[3]).to.be.true;
    });
  });

  describe('Performing scheme', () => {
    let duration = 3600;

    beforeEach(async () => {
      await schemeManager.addScheme(scheme.address);

      await scheme.start.returns();
      await scheme.duration.returns(duration);
    });

    it('Should allow schemes to be started', async () => {
      await schemeManager.getOngoingScheme(alice.address).then((scheme: any) => {
        expect(scheme._schemeId).to.eq(0);
        expect(scheme._isOngoing).to.eq(false);
        expect(scheme._timeCompleting).to.eq(0);
        expect(scheme._timeStarted).to.eq(0);
      });

      await schemeManager.startScheme(1);

      let time = await getBlockTime();

      await schemeManager.getOngoingScheme(alice.address).then((scheme: any) => {
        expect(scheme._isOngoing).to.eq(true);
        expect(scheme._schemeId).to.eq(1);
        expect(scheme._timeStarted).to.eq(time);
        expect(scheme._timeCompleting).to.eq(time + duration);
      });
    });

    it('Should allow schemes to be completed', async () => {
      await schemeManager.startScheme(1);
      await scheme.complete.returns();

      await wait(3600);

      await schemeManager.completeScheme();

      await schemeManager.getOngoingScheme(alice.address).then((scheme: any) => {
        expect(scheme._isOngoing).to.eq(false);
        expect(scheme._schemeId).to.eq(0);
        expect(scheme._timeStarted).to.eq(0);
        expect(scheme._timeCompleting).to.eq(0);
      });
    });

    describe('Restrictions', () => {
      it('Should prevent starting an scheme if one is already in progress', async () => {
        await schemeManager.startScheme(1);
        await expect(schemeManager.startScheme(1)).to.be.revertedWith('A scheme is already in progress');
      });

      it('Should prevent starting an invalid scheme', async () => {
        await expect(schemeManager.startScheme(999)).to.be.revertedWith('Invalid scheme chosen');
      });

      it('Should prevent completing an scheme if one is not in progress', async () => {
        await expect(schemeManager.completeScheme()).to.be.revertedWith('No scheme in progress');
      });

      it('Should prevent completing an scheme before it the duration has passed', async () => {
        await schemeManager.startScheme(1);

        await expect(schemeManager.completeScheme()).to.be.revertedWith('Scheme is not complete');
      });
    });
  });
});
