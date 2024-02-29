import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities } from '../const';
import { Offers } from '../types/offer';
import {
  loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  setActiveCity,
  setFavoriteOffersDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';

type InitialState = {
  offers: Offers;
  favoriteOffers: Offers;
  city: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  favoriteOffers: [],
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isFavoriteOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isFavoriteOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
