import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appData } from './app-data/app-data.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
