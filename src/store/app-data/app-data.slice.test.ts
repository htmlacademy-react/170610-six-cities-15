import { DEFAULT_STATE } from '../../const';
import { getRandomNumber, makeFakeOffer } from '../../utils/mocks';
import { fetchOffersAction, toggleFavoriteAction } from '../api-actions';
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

  it('should set "isToggleFavoriteLoading" to "true", "hasError" to "false" with "toggleFavoriteAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.DATA,
      isToggleFavoriteLoading: true,
      hasError: false,
    };

    const result = appData.reducer(undefined, toggleFavoriteAction.pending);

    expect(result).toEqual(expectedState);
  });

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
});
