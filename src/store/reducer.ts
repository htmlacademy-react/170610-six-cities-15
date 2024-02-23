import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setCityOffers, setAllOffers } from './action';
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
    .addCase(setCityOffers, (state, action) => {
      state.cityOffers = action.payload.map((offer) => ({
        offer: offer,
        comments: [],
      }));
    })
    .addCase(setAllOffers, (state, action) => {
      state.allOffers = action.payload.map((offer) => ({
        offer: offer,
        comments: [],
      }));
    });
});

export { reducer };
