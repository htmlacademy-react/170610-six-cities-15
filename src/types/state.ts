import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { TOffer, TOffers } from './offer';
import { TComments } from './comment';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TAppData = {
  offers: TOffers;
  isOffersDataLoading: boolean;
  hasError: boolean;
  isToggleFavoriteLoading: boolean;
  offer: TOffer;
  isOfferDataLoading: boolean;
  comments: TComments;
};

export type TAppProcess = {
  city: string;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
