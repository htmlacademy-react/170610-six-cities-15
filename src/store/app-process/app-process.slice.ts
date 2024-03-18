import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY_NAME, NameSpace } from '../../const';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  city: DEFAULT_CITY_NAME as TAppProcess['city'],
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
