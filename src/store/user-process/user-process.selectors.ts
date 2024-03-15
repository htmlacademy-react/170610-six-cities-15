import { AuthorizationStatus, NameSpace } from '../../const';
import { TState } from '../../types/state';
import { TUserData } from '../../types/user-data';

export const getAuthorizationStatus = (
  state: Pick<TState, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (
  state: Pick<TState, NameSpace.User>
): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserData = (state: Pick<TState, NameSpace.User>): TUserData =>
  state[NameSpace.User].userData;
