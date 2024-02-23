import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as appReducer } from './reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
