import { AuthorizationStatus, NameSpace } from '../../const';
import { TState } from '../../types/state';
import { makeFakeUser } from '../../utils/mocks';
import {
  getAuthCheckedStatus,
  getAuthorizationStatus,
  getUserData,
} from './user-process.selectors';

describe('getAuthorizationStatus', () => {
  it('should return correct authorization status', () => {
    const mockState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    };
    const result = getAuthorizationStatus(
      mockState as Pick<TState, NameSpace.User>
    );
    expect(result).toBe(AuthorizationStatus.Auth);
  });
});

describe('getAuthCheckedStatus', () => {
  it('should return true when user authorization status is not unknown', () => {
    const mockState = {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    };
    const result = getAuthCheckedStatus(
      mockState as Pick<TState, NameSpace.User>
    );
    expect(result).toBe(true);
  });
});

describe('getUserData', () => {
  it('should return correct UserData', () => {
    const mockUser = makeFakeUser();

    const mockState = {
      [NameSpace.User]: {
        userData: mockUser,
      },
    };
    const expectedUserData = mockUser;

    expect(getUserData(mockState as Pick<TState, NameSpace.User>)).toEqual(
      expectedUserData
    );
  });

  it('test_getUserData_returnsUndefined', () => {
    const mockState = {
      [NameSpace.User]: {},
    };
    expect(
      getUserData(mockState as Pick<TState, NameSpace.User>)
    ).toBeUndefined();
  });
});
