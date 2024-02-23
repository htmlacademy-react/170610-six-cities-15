import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity } from './action';

type State = {
  city: string | undefined;
};

const initialState: State = {
  city: 'Paris',
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setActiveCity, (state, action) => {
    state.city = action.payload;
  });
});

export { reducer };
