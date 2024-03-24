import { render, screen } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    const expectedText = 'Favorites (empty)';

    render(<FavoritesEmpty />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
