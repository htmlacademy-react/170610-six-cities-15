import { createReducer } from '@reduxjs/toolkit';
import {
  loadOffers,
  setOffersDataLoadingStatus,
  setActiveCity,
  requireAuthorization,
  setError,
} from './action';
import { cities, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

type InitialState = {
  offers: Offers;
  city: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  offers: [],
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
