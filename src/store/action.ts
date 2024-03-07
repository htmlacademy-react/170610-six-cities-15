import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setActiveCity = createAction<string>('app/setActiveCity');

// export const requireAuthorization = createAction<AuthorizationStatus>(
//   'user/requireAuthorization'
// );
