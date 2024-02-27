import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { Comments } from '../types/comment';

export const loadOffers = createAction<Offers>('loadOffers');
export const loadComments = createAction<Comments>('loadComments');
export const setActiveCity = createAction<string>('setActiveCity');
