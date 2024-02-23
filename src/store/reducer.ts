import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setCityOffers } from './action';
import { OfferWithComments } from '../types/offerWithComments';
type State = {
  city: string;
  cityOffers: OfferWithComments[];
};

const initialState: State = {
  city: 'Paris',
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
    });
});

export { reducer };
