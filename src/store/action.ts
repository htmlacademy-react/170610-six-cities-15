import { createAction } from '@reduxjs/toolkit';
import { OfferWithComments } from '../types/offerWithComments';

// Определяем тип для действия
export type SetAllOffersAction = ReturnType<typeof setAllOffers>;
export type SetActiveCityAction = ReturnType<typeof setActiveCity>;

// Создаем действие
export const setAllOffers = createAction<OfferWithComments[]>('setAllOffers');
export const setActiveCity = createAction<string>('setActiveCity');

export type State = {
  city: string;
  allOffers: OfferWithComments[];
  cityOffers: OfferWithComments[];
};
