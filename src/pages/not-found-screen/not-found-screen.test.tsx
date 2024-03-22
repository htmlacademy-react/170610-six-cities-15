import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory } from '../../utils/mock-component';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const expectedText = '404 Not Found';
    const withHistoryComponent = withHistory(<NotFoundScreen />, mockHistory);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
