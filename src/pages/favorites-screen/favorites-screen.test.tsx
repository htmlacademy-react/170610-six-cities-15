import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import FavoritesScreen from './favorites-screen';

describe('Component: FavoritesScreen', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'favorites-page';

    const withHistoryComponent = withHistory(<FavoritesScreen />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
