import { expect } from 'chai';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { Schemes, YieldFarm } from '../../typechain';
import BaseSchemeArtifact from '../../artifacts/contracts/schemes/BaseScheme.sol/BaseScheme.json';

import { deploySchemesContract, getBlockTime, getProvider, wait } from '../helpers/contract';

const [alice] = getProvider().getWallets();

describe('Schemes', () => {
  let scheme: YieldFarm | MockContract;
  let schemes: Schemes;

  beforeEach(async () => {
    scheme = await deployMockContract(alice, BaseSchemeArtifact.abi);
    schemes = await deploySchemesContract(alice);
  });

  it('Should allow creation of new Schemes', async () => {
    await schemes.addScheme(scheme.address);

    await schemes.schemes(1).then((fetchedScheme: any) => {
      expect(fetchedScheme.schemeAddress).to.eq(scheme.address);
    });
  });

  it('Should create a list of all active schemes', async () => {
    let scheme2 = await deployMockContract(alice, BaseSchemeArtifact.abi);
    let scheme3 = await deployMockContract(alice, BaseSchemeArtifact.abi);

    await schemes.addScheme(scheme.address);
    await schemes.addScheme(scheme2.address);
    await schemes.addScheme(scheme3.address);

    await schemes.listSchemes().then((schemes: boolean[]) => {
      expect(schemes[0]).to.be.false;
      expect(schemes[1]).to.be.true;
      expect(schemes[2]).to.be.true;
      expect(schemes[3]).to.be.true;
    });
  });

  describe('Performing scheme', () => {
    let duration = 3600;

    beforeEach(async () => {
      await schemes.addScheme(scheme.address);

      await scheme.mock.start.returns();
      await scheme.mock.duration.returns(duration);
    });

    it('Should allow schemes to be started', async () => {
      await schemes.startScheme(1);

      let time = await getBlockTime();

      await schemes.ongoingSchemes(alice.address).then((scheme: any) => {
        expect(scheme.hasActiveScheme).to.eq(true);
        expect(scheme.scheme).to.eq(1);
        expect(scheme.timeStarted).to.eq(time);
        expect(scheme.timeCompleting).to.eq(time + duration);
      });
    });

    it('Should allow schemes to be completed', async () => {
      await schemes.startScheme(1);
      await scheme.mock.complete.returns();

      await wait(3600);

      await schemes.completeScheme(1);

      await schemes.ongoingSchemes(alice.address).then((scheme: any) => {
        expect(scheme.hasActiveScheme).to.eq(false);
        expect(scheme.scheme).to.eq(0);
        expect(scheme.timeStarted).to.eq(0);
        expect(scheme.timeCompleting).to.eq(0);
      });
    });

    describe('Access control', () => {
      it('Should prevent starting an scheme if one is already in progress', async () => {
        await schemes.startScheme(1);
        await expect(schemes.startScheme(1)).to.be.revertedWith('An scheme is already in progress');
      });

      it('Should prevent starting an invalid scheme', async () => {
        await expect(schemes.startScheme(999)).to.be.revertedWith('Invalid scheme chosen');
      });

      it('Should prevent completing an scheme if one is not in progress', async () => {
        await expect(schemes.completeScheme(1)).to.be.revertedWith('No scheme in progress');
      });

      it('Should prevent completing an scheme before it the duration has passed', async () => {
        await schemes.startScheme(1);

        await expect(schemes.completeScheme(1)).to.be.revertedWith('Scheme is not complete');
      });
    });
  });
});
