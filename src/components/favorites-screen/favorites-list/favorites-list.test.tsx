import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import FavoritesList from './favorites-list';

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const favoritesListElementTestId = 'favoritesListElement';

    const { withStoreComponent } = withStore(
      <FavoritesList />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(favoritesListElementTestId)).toBeInTheDocument();
  });
});
