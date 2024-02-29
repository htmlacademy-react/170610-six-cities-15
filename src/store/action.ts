import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const loadOffers = createAction<Offers>('data/loadOffers');
export const setActiveCity = createAction<string>('app/setActiveCity');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setError = createAction<string | null>('app/setError');
