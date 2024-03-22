import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory } from '../../../../utils/mock-component';
import AuthenticatedUser from './аuthenticated-user';

describe('Component: AuthenticatedUser', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const navItemUserTestId = 'header-nav-item-user';

    const withHistoryComponent = withHistory(
      <AuthenticatedUser
        userData={{ email: '', avatarUrl: '' }}
        onLogout={() => {}}
        favoriteOffersCount={0}
      />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(navItemUserTestId)).toBeInTheDocument();
  });
});
