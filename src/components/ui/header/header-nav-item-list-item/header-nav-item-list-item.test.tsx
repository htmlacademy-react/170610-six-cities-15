import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory } from '../../../../utils/mock-component';
import HeaderNavItemListItem from './header-nav-item-list-item';

describe('Component: HeaderNavItemListItem', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'header-nav-item';
    const withHistoryComponent = withHistory(
      <HeaderNavItemListItem onLogout={() => {}} />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
