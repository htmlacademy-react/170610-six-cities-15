import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { TComments } from './comment';
import { TOffer, TOffers } from './offer';
import { TUserData } from './user-data';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: TUserData;
  isUserDataLoading: boolean;
};

export type TAppData = {
  offers: TOffers;
  isOffersDataLoading: boolean;
  hasError: boolean;
  isToggleFavoriteLoading: boolean;
  offer: TOffer;
  isOfferDataLoading: boolean;
  comments: TComments;
  nearbyOffers: TOffers;
  favoriteOffers: TOffers;
  isCommentDataSending: boolean;
  hasSubmitError: boolean;
  hasOfferDataLoadingError: boolean;
};

export type TAppProcess = {
  city: string;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
