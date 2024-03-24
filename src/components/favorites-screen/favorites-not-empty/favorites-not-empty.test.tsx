import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import FavoritesNotEmpty from './favorites-not-empty';

describe('Component: FavoritesNotEmpty', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const expectedText = 'Saved listing';

    const withHistoryComponent = withHistory(
      <FavoritesNotEmpty />,
      mockHistory
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
