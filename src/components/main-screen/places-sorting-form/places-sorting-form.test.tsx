import { render, screen } from '@testing-library/react';
import PlacesSortingForm from './places-sorting-form';

describe('Component: PlacesSortingForm', () => {
  it('should render correctly', () => {
    const expectedText = 'Sort by';

    render(
      <PlacesSortingForm
        handleSortOptionClick={() => {}}
        sortOption="Popular"
        handleSort={() => {}}
        sortingOptionsVisible
        setSortingOptionsVisible={() => {}}
      />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
