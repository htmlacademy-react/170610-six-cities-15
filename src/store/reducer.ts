import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { Offers } from '../types/offer';
import { OfferWithComments } from '../types/offerWithComments';
import { setActiveCity, setAllOffers, loadOffers } from './action';
type State = {
  city: string;
  offers: Offers[];
  allOffers: OfferWithComments[];
};

const initialState: State = {
  city: cities.PARIS,
  offers: [],
  allOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAllOffers, (state, action) => {
      state.allOffers = action.payload.map((offer) => ({ ...offer }));
    });
});

export { reducer };
