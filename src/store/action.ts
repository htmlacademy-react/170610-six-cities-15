import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { TComments } from '../types/comment';
import { TOffer, TOffers } from '../types/offer';

export const loadOffers = createAction<TOffers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const loadFavoriteOffers = createAction<TOffers>(
  'data/loadFavoriteOffers'
);
export const setFavoriteOffersDataLoadingStatus = createAction<boolean>(
  'data/setFavoriteOffersDataLoadingStatus'
);

export const loadOffer = createAction<TOffer>('data/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>(
  'data/setOfferDataLoadingStatus'
);

export const loadComments = createAction<TComments>('data/loadComments');
export const setCommentsDataLoadingStatus = createAction<boolean>(
  'data/setCommentsDataLoadingStatus'
);

export const loadNearbyOffers = createAction<TOffers>('data/loadNearbyOffers');
export const setNearbyOffersDataLoadingStatus = createAction<boolean>(
  'data/setNearbyOffersDataLoadingStatus'
);

export const toggleFavoriteOffer = createAction<TOffer>(
  'app/toggleFavoriteOffer'
);

export const setActiveCity = createAction<string>('app/setActiveCity');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
