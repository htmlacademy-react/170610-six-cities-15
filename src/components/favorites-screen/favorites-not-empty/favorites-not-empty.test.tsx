import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../utils/mock-component';
import FavoritesNotEmpty from './favorites-not-empty';
import { makeFakeStore } from '../../../utils/mocks';
import { AppRoute } from '../../../const';

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
