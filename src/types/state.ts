import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Offers } from './offer';

export type AppData = {
  offers: Offers;
  isOffersDataLoading: boolean;
  hasError: boolean;
};

// export type GameProcess = {
//   mistakes: number;
//   step: number;
// };

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
