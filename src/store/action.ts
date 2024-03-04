import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Comments } from '../types/comment';
import { Offer, Offers } from '../types/offer';

export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const loadFavoriteOffers = createAction<Offers>(
  'data/loadFavoriteOffers'
);
export const setFavoriteOffersDataLoadingStatus = createAction<boolean>(
  'data/setFavoriteOffersDataLoadingStatus'
);

export const loadOffer = createAction<Offer>('data/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>(
  'data/setOfferDataLoadingStatus'
);

export const loadComments = createAction<Comments>('data/loadComments');
export const setCommentsDataLoadingStatus = createAction<boolean>(
  'data/setCommentsDataLoadingStatus'
);

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
export const setNearbyOffersDataLoadingStatus = createAction<boolean>(
  'data/setNearbyOffersDataLoadingStatus'
);

export const toggleFavoriteOffer = createAction<Offer>(
  'app/toggleFavoriteOffer'
);

export const setActiveCity = createAction<string>('app/setActiveCity');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
