import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { TUserProcess } from '../../types/state';
import { TUserData } from '../../types/user-data';
import {
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchUserDataAction,
} from '../api-actions';

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as TUserData,
  isUserDataLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserDataAction.pending, (state) => {
        state.isUserDataLoading = true;
      })
      .addCase(fetchUserDataAction.fulfilled, (state, action) => {
        state.isUserDataLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserDataAction.rejected, (state) => {
        state.isUserDataLoading = false;
      });
  },
});
