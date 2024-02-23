import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const setActiveCity = createAction<string>('setActiveCity');
export const setCityOffers = createAction<Offer[]>('setCityOffers');
