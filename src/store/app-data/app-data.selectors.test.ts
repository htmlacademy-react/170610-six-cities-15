import { NameSpace } from '../../const';
import {
  getComments,
  getErrorStatus,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
  getOffersDataLoadingStatus,
} from '../../store/app-data/app-data.selectors';
import { TComments } from '../../types/comment';
import { TOffers } from '../../types/offer';
import { TState } from '../../types/state';
import {
  getRandomNumber,
  makeFakeComment,
  makeFakeNearbyOffer,
  makeFakeOffer,
} from '../../utils/mocks';

describe('getOffers', () => {
  it('should returns correct offers from the given state', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from(
      { length: getRandomNumber(1, 15) },
      () => mockOffer
    );
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
    expect(result).toEqual([]);
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
  it('should returns correct offer from the given state', () => {
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

describe('isOfferDataLoading ', () => {
  it('should return true when isOfferDataLoading is true', () => {
    const mockState = {
      [NameSpace.Data]: {
        isOfferDataLoading: true,
      },
    };
    const result = getOfferDataLoadingStatus(
      mockState as Pick<TState, NameSpace.Data>
    );
    expect(result).toBe(true);
  });
});

describe('getComments', () => {
  it('should return correct comments from the given state', () => {
    const mockComment = makeFakeComment();
    const mockComments = Array.from(
      { length: getRandomNumber(1, 15) },
      () => mockComment
    );

    const mockState = {
      [NameSpace.Data]: {
        comments: mockComments,
      },
    };
    const result = getComments(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual(mockComments);
  });

  it('should return an empty array if there are no comments in the state', () => {
    const mockState = {
      [NameSpace.Data]: {
        comments: [] as TComments,
      },
    };
    const result = getComments(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual([]);
  });
});

describe('getNearbyOffers', () => {
  it('should return correct nearby offers from the given state', () => {
    const mockNearbyOffer = makeFakeNearbyOffer();
    const mockNearbyOffers = Array.from(
      { length: getRandomNumber(1, 15) },
      () => mockNearbyOffer
    );

    const mockState = {
      [NameSpace.Data]: {
        nearbyOffers: mockNearbyOffers,
      },
    };
    const result = getNearbyOffers(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual(mockState[NameSpace.Data].nearbyOffers);
  });

  it('should return an empty array if there are no nearby offers in the state', () => {
    const mockState = {
      [NameSpace.Data]: {
        nearbyOffers: [] as TOffers,
      },
    };
    const result = getNearbyOffers(mockState as Pick<TState, NameSpace.Data>);
    expect(result).toEqual([]);
  });
});
