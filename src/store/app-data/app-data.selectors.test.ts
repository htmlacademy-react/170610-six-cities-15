import { NameSpace } from '../../const';
import {
  getOffers,
  getOffersDataLoadingStatus,
  getErrorStatus,
  getOffer,
} from '../../store/app-data/app-data.selectors';
import { TOffers } from '../../types/offer';
import { TState } from '../../types/state';
import { makeFakeOffer } from '../../utils/mocks';

describe('getOffers', () => {
  it('should returns correct offers', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from({ length: 3 }, () => mockOffer);
    const mockState = {
      [NameSpace.Data]: {
        offers: mockOffers,
      },
    };

    const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual(mockState[NameSpace.Data].offers);
  });

  it('should returns empty array when no offers', () => {
    const mockState = {
      [NameSpace.Data]: {
        offers: [] as TOffers,
      },
    };

    const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual(mockState[NameSpace.Data].offers);
  });

  it('should returns undefined when offers not present', () => {
    const mockState = {
      [NameSpace.Data]: {},
    };
    const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toBeUndefined();
  });
});

describe('getOffersDataLoadingStatus', () => {
  it('should return true when isOffersDataLoading is true', () => {
    const mockState = {
      [NameSpace.Data]: {
        isOffersDataLoading: true,
      },
    };
    const result = getOffersDataLoadingStatus(
      mockState as Pick<TState, NameSpace.Data>
    );
    expect(result).toBe(true);
  });
});

describe('getErrorStatus', () => {
  it('should return true when hasError is true', () => {
    const mockState = {
      [NameSpace.Data]: {
        hasError: true,
      },
    };
    const result = getErrorStatus(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toBe(true);
  });
});

describe('getOffer', () => {
  it('should returns correct offer', () => {
    const mockOffer = makeFakeOffer();
    const mockState = {
      [NameSpace.Data]: { offer: mockOffer },
    };

    const result = getOffer(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual(result);
  });

  it('should returns undefined when offer not present', () => {
    const mockState = {
      [NameSpace.Data]: {},
    };
    const result = getOffer(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toBeUndefined();
  });
});
