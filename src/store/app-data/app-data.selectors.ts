import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { TOffer, TOffers } from '../../types/offer';
import { TComments } from '../../types/comment';

export const getOffers = (state: TState): TOffers =>
  state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: TState): boolean =>
  state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: TState): boolean =>
  state[NameSpace.Data].hasError;
export const getOffer = (state: TState): TOffer => state[NameSpace.Data].offer;
export const getOfferDataLoadingStatus = (state: TState): boolean =>
  state[NameSpace.Data].isOfferDataLoading;
export const getComments = (state: TState): TComments =>
  state[NameSpace.Data].comments;
