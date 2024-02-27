import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { Comments } from '../types/comment';
import { AuthorizationStatus } from '../const';

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadFavoriteOffers = createAction<Offers>(
  'data/loadFavoriteOffers'
);
export const loadComments = createAction<Comments>('data/loadComments');
export const setActiveCity = createAction<string>('app/setActiveCity');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setQuestionsDataLoadingStatus'
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('app/setError');
