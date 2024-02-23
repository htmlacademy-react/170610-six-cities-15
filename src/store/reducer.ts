import { createReducer } from '@reduxjs/toolkit';
import { filterByCityName } from './action';
import { OfferWithComments } from '../types/offerWithComments';

const initialState = {
  city: '' as string | undefined,
  offers: [] as OfferWithComments[],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(filterByCityName, (state, action) => {
    state.city = action.payload;
  });
});
export { reducer };
