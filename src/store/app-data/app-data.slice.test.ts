import { DEFAULT_STATE } from '../../const';
import {
  getRandomNumber,
  makeFakeComment,
  makeFakeOffer,
} from '../../utils/mocks';
import {
  fetchCommentsAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  toggleFavoriteAction,
} from '../api-actions';
import { appData } from './app-data.slice';

describe('AppData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      ...DEFAULT_STATE.DATA,
    };

    const result = appData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      ...DEFAULT_STATE.DATA,
    };

    const result = appData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  /* Tests fetchOffersAction */

  it('should set "isOffersDataLoading" to "true", "hasError" to "false" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isOffersDataLoading: true,
      hasError: false,
    };

    const result = appData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });
  it('should set "offers" to array with offers, "isOffersDataLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from(
      { length: getRandomNumber(1, 15) },
      () => mockOffer
    );
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      offers: mockOffers,
      isOffersDataLoading: false,
      hasError: false,
    };

    const result = appData.reducer(
      undefined,
      fetchOffersAction.fulfilled(mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('should set "isOffersDataLoading" to "false", "hasError" to "true" with "fetchOffersAction.rejected', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isOffersDataLoading: false,
      hasError: true,
    };
    const result = appData.reducer(undefined, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  /* Tests toggleFavoriteAction */

  it('should set "isToggleFavoriteLoading" to "true", "hasError" to "false" with "toggleFavoriteAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isToggleFavoriteLoading: true,
      hasError: false,
    };

    const result = appData.reducer(undefined, toggleFavoriteAction.pending);

    expect(result).toEqual(expectedState);
  });

  /* Test for "toggleFavoriteAction.fulfilled" */
  it('should set "favoriteOffers" with new favorite offer if "status" is "1", "isToggleFavoriteLoading" to "false" with "toggleFavoriteAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const { id } = mockOffer;
    const mockFavoriteStatus = 1;

    const mockOfferWithNewFavoriteStatus = {
      ...mockOffer,
      isFavorite: mockFavoriteStatus === 1,
    };

    const expectedState = {
      ...DEFAULT_STATE.DATA,
      favoriteOffers: Array.from(
        { length: 1 },
        () => mockOfferWithNewFavoriteStatus
      ),

      isToggleFavoriteLoading: false,
      hasError: false,
    };

    const result = appData.reducer(
      undefined,
      toggleFavoriteAction.fulfilled(mockOfferWithNewFavoriteStatus, '', {
        id: id,
        status: mockFavoriteStatus,
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isToggleFavoriteLoading" to "false", "hasError" to "true" with "toggleFavoriteAction.rejected', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isToggleFavoriteLoading: false,
      hasError: true,
    };
    const result = appData.reducer(undefined, toggleFavoriteAction.rejected);

    expect(result).toEqual(expectedState);
  });

  /* Tests fetchOfferAction */

  it('should set "isOfferDataLoading" to "true", "hasOfferDataLoadingError" to "false" with "fetchOfferAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isOfferDataLoading: true,
      hasOfferDataLoadingError: false,
    };

    const result = appData.reducer(undefined, fetchOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to offer, "isOfferDataLoading" to "false", "hasOfferDataLoadingError" to "false" with "fetchOfferAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const { id } = mockOffer;

    const expectedState = {
      ...DEFAULT_STATE.DATA,
      offer: mockOffer,
      isOfferDataLoading: false,
      hasOfferDataLoadingError: false,
    };

    const result = appData.reducer(
      undefined,
      fetchOfferAction.fulfilled(mockOffer, '', id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferDataLoading" to "false", "hasOfferDataLoadingError" to "true" with "fetchOfferAction.rejected', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      hasOfferDataLoadingError: true,
      isOfferDataLoading: false,
    };
    const result = appData.reducer(undefined, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  /* Tests fetchCommentsAction */

  it('should set "hasError" to "false" with "fetchCommentsAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      hasError: false,
    };

    const result = appData.reducer(undefined, fetchCommentsAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to comments with "fetchCommentsAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const { id } = mockOffer;
    const mockComments = Array.from({ length: getRandomNumber(1, 15) }, () =>
      makeFakeComment()
    );

    const expectedState = {
      ...DEFAULT_STATE.DATA,
      comments: mockComments,
    };

    const result = appData.reducer(
      undefined,
      fetchCommentsAction.fulfilled(mockComments, '', id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to "true" with "fetchCommentsAction.rejected', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      hasError: true,
    };
    const result = appData.reducer(undefined, fetchCommentsAction.rejected);

    expect(result).toEqual(expectedState);
  });

  /* Tests fetchNearbyOffersAction */

  it('should set "hasError" to "false" with "fetchNearbyOffersAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      hasError: false,
    };

    const result = appData.reducer(undefined, fetchNearbyOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearbyOffers" to nearbyOffers with "fetchNearbyOffersAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const { id } = mockOffer;
    const mockOffers = Array.from({ length: getRandomNumber(1, 15) }, () =>
      makeFakeOffer()
    );

    const expectedState = {
      ...DEFAULT_STATE.DATA,
      nearbyOffers: mockOffers,
    };

    const result = appData.reducer(
      undefined,
      fetchNearbyOffersAction.fulfilled(mockOffers, '', id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "hasError" to "true" with "fetchNearbyOffersAction.rejected', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      hasError: true,
    };
    const result = appData.reducer(undefined, fetchNearbyOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
