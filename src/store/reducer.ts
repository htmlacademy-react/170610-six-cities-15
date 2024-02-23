import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setAllOffers } from './action';
import { OfferWithComments } from '../types/offerWithComments';
import { cities } from '../const';
type State = {
  city: string;
  allOffers: OfferWithComments[];
  cityOffers: OfferWithComments[];
};

const initialState: State = {
  city: cities.PARIS,
  allOffers: [],
  cityOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAllOffers, (state, action) => {
      state.allOffers = action.payload.map((offer) => ({ ...offer }));
    });
});

export { reducer };
