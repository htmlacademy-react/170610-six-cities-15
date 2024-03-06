import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { TOffers } from './offer';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TAppData = {
  offers: TOffers;
  isOffersDataLoading: boolean;
};

// export type GameProcess = {
//   mistakes: number;
//   step: number;
// };

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
