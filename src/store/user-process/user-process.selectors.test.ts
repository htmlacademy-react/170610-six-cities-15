import { AuthorizationStatus, NameSpace } from '../../const';
import { TState } from '../../types/state';
import {
  getAuthCheckedStatus,
  getAuthorizationStatus,
} from './user-process.selectors';

describe('UserProcess selectors', () => {
  const mockState = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
    },
  };
  describe('getAuthorizationStatus', () => {
    it('should return correct authorization status', () => {
      const { authorizationStatus } = mockState[NameSpace.User];
      const result = getAuthorizationStatus(
        mockState as Pick<TState, NameSpace.User>
      );
      expect(result).toBe(authorizationStatus);
    });
  });

  describe('getAuthCheckedStatus', () => {
    it('should return false when user authorization status is not unknown', () => {
      mockState[NameSpace.User].authorizationStatus =
        AuthorizationStatus.Unknown;
      const result = getAuthCheckedStatus(
        mockState as Pick<TState, NameSpace.User>
      );
      expect(result).toBe(false);
    });
  });
});
