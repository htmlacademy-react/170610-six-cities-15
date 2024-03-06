import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Cities } from '../../const';
import { TAppProcess } from '../../types/state';
import { TActiveCity } from '../../types/offer';

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
