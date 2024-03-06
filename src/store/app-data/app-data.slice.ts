import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TAppData } from '../../types/state';
import { fetchOffersAction, toggleFavoriteAction } from '../api-actions';

const initialState: TAppData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  isToggleFavoriteLoading: false,
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
      })
      .addCase(toggleFavoriteAction.pending, (state) => {
        state.isToggleFavoriteLoading = true;
        state.hasError = false;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const { id, isFavorite } = action.payload;

        state.offers = state.offers.map((offer) => {
          if (offer.id === id) {
            return {
              ...offer,
              isFavorite: isFavorite,
            };
          }
          return offer;
        });

        state.isToggleFavoriteLoading = false;
      })
      .addCase(toggleFavoriteAction.rejected, (state) => {
        state.isToggleFavoriteLoading = false;
        state.hasError = true;
      });
  },
});
