import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../const';
import { TActiveCity } from '../../types/offer';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  city: Cities.Paris,
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
});

export const { changeCity } = appProcess.actions;
