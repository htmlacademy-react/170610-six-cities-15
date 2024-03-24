import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import {
  getRandomNumber,
  makeFakeOffer,
  makeFakeStore,
} from '../../../utils/mocks';
import FavoritesItem from './favorites-item';

describe('Component: FavoritesItem', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly if there are favorite offers', () => {
    const mockOffers = Array.from({ length: getRandomNumber(1, 5) }, () =>
      makeFakeOffer()
    );
    const favoritesItemElementTestId = 'favoritesItemElement';

    const withHistoryComponent = withHistory(<FavoritesItem />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: { ...makeFakeStore().DATA, favoriteOffers: mockOffers },
      })
    );

    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    const elements = screen.getAllByTestId(favoritesItemElementTestId);
    expect(elements.length).toBeGreaterThan(0);
  });
});
