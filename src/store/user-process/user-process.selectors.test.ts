import { AuthorizationStatus, NameSpace } from '../../const';
import { TState } from '../../types/state';
import { getAuthorizationStatus } from './user-process.selectors';
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
