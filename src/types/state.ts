import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { TOffers } from './offer';

export type TAppData = {
  offers: TOffers;
  isOffersDataLoading: boolean;
  hasError: boolean;
};

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
