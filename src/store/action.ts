import { createAction } from '@reduxjs/toolkit';
import { OfferWithComments } from '../types/offerWithComments';

// Определяем тип для действия
export type SetActiveCityAction = ReturnType<typeof setActiveCity>;
export type SetAllOffersAction = ReturnType<typeof setAllOffers>;

// Создаем действие
export const setActiveCity = createAction<string>('setActiveCity');
export const setAllOffers = createAction<OfferWithComments[]>('setAllOffers');
