import { AuthorizationStatus } from '../../const';
import { makeFakeUser } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process.slice';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const mockUser = makeFakeUser();
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };
    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {},
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();

    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: { ...mockUser },
      isUserDataLoading: false,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: { ...mockUser },
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        ...mockUser,
      },
      isUserDataLoading: false,
    };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
