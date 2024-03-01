import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';

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

export const setActiveCity = createAction<string>('app/setActiveCity');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
