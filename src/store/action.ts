import { createAction } from '@reduxjs/toolkit';
import { OfferWithComments } from '../types/offerWithComments';
import { Offers } from '../types/offer';

// Определяем тип для действия
export type SetOffersAction = ReturnType<typeof loadOffers>;

export type SetActiveCityAction = ReturnType<typeof setActiveCity>;
export type SetAllOffersAction = ReturnType<typeof setAllOffers>;

// Создаем действие
export const loadOffers = createAction<Offers>('data/loadOffers');

export const setActiveCity = createAction<string>('app/setActiveCity');
export const setAllOffers =
  createAction<OfferWithComments[]>('app/setAllOffers');
