import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TAppData } from '../../types/state';
import { fetchOffersAction } from '../api-actions';

const initialState: TAppData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  },
});
