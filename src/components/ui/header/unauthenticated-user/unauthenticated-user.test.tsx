import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory } from '../../../../utils/mock-component';
import UnauthenticatedUser from './unauthenticated-user';

describe('Component: UnauthenticatedUser', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const navNoAuthUserElementTestId = 'navNoAuthUserElement';
    const withHistoryComponent = withHistory(
      <UnauthenticatedUser />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(navNoAuthUserElementTestId)).toBeInTheDocument();
  });
});
