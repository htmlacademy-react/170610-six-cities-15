import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffers,
  setOffersDataLoadingStatus,
  setActiveCity,
  requireAuthorization,
} from './action';
import { cities, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

type InitialState = {
  offers: Offers;
  city: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
