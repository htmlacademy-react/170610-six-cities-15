import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../const';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  city: Cities.Paris,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ city: string }>) => {
      const { city } = action.payload;
      state.city = String(city);
    },
  },
});

export const { changeCity } = appProcess.actions;
