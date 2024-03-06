import { store } from '../store/index';
import { AuthorizationStatus } from '../const';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
