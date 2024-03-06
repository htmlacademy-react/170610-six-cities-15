import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { TOffers } from '../../types/offer';

export const getOffers = (state: TState): TOffers =>
  state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: TState): boolean =>
  state[NameSpace.Data].isOffersDataLoading;
