import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity } from './action';

// Тип для начального состояния
type State = {
  city: string | undefined;
};

// Начальное состояние
const initialState: State = {
  city: undefined,
};

// Создание редьюсера
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setActiveCity, (state, action) => {
    state.city = action.payload;
  });
});

// Экспорт редьюсера
export { reducer };
