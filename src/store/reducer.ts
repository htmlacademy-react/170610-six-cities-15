import { createReducer } from '@reduxjs/toolkit';
import { cities, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { Comments } from '../types/comment';

import {
  loadOffers,
  loadFavoriteOffers,
  loadComments,
  setActiveCity,
  requireAuthorization,
} from './action';

type InitialState = {
  offers: Offers;
  favoriteOffers: Offers;
  comments: Comments;
  city: string;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  offers: [],
  favoriteOffers: [],
  comments: [],
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
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
