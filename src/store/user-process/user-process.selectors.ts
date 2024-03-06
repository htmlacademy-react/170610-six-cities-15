import { NameSpace } from '../../const';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (
  state: Pick<TState, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (
  state: Pick<TState, NameSpace.User>
): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
