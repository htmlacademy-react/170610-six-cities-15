import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../const';
import { TActiveCity } from '../../types/offer';
import { TAppProcess } from '../../types/state';
import { toggleFavoriteAction } from '../api-actions';

const initialState: TAppProcess = {
  city: Cities.Paris,
  isToggleFavoriteLoading: false,
  hasError: false,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ city: TActiveCity }>) => {
      const { city } = action.payload;
      state.city = String(city);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(toggleFavoriteAction.pending, (state) => {
        state.isToggleFavoriteLoading = true;
        state.hasError = false;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        state.isToggleFavoriteLoading = false;
      })
      .addCase(toggleFavoriteAction.rejected, (state) => {
        state.isToggleFavoriteLoading = false;
        state.hasError = true;
      });
  },
});

export const { changeCity } = appProcess.actions;
