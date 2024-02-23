import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const setAllOffers = createAction<Offer[]>('setAllOffers');
export const setActiveCity = createAction<string>('setActiveCity');
export const setCityOffers = createAction<Offer[]>('setCityOffers');
