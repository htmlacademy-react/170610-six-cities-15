import { createReducer } from '@reduxjs/toolkit';
import { cities, AuthorizationStatus } from '../const';

import {
  loadOffers,
  loadComments,
  setActiveCity,
  requireAuthorization,
} from './action';

const initialState = {
  offers: [],
  comments: [],
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
