import { DEFAULT_STATE } from '../../const';
import { getRandomNumber, makeFakeOffer } from '../../utils/mocks';
import { fetchOffersAction } from '../api-actions';
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
});
