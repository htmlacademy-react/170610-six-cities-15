import { createAction } from '@reduxjs/toolkit';
import { OfferWithComments } from '../types/offerWithComments';

// Определяем тип для действия установки всех офферов
export type SetAllOffersAction = ReturnType<typeof setAllOffers>;

// Создаем действие для установки всех офферов
export const setAllOffers = createAction<OfferWithComments[]>('setAllOffers');

// Определяем тип для действия установки активного города
export type SetActiveCityAction = ReturnType<typeof setActiveCity>;

// Создаем действие для установки активного города
export const setActiveCity = createAction<string>('setActiveCity');

// Определяем тип для действия установки офферов города
export type SetCityOffersAction = ReturnType<typeof setCityOffers>;

// Создаем действие для установки офферов города
export const setCityOffers = createAction<OfferWithComments[]>('setCityOffers');

export type State = {
  city: string;
  allOffers: OfferWithComments[];
  cityOffers: OfferWithComments[];
};
