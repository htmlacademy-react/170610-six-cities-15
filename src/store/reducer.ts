import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { Offers } from '../types/offer';
import { Comments } from '../types/comment';
import { loadOffers, loadComments, setActiveCity } from './action';
type State = {
  city: string;
  offers: Offers[];
  comments: Comments[];
};

const initialState: State = {
  offers: [],
  comments: [],
  city: cities.PARIS,
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
    });
});

export { reducer };
