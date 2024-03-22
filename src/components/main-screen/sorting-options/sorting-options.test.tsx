import { render, screen } from '@testing-library/react';
import SortingOptions from './sorting-options';

describe('Component: SortingOptions', () => {
  it('should render correctly', () => {
    const testId = 'sort-options';

    render(
      <SortingOptions
        handleSort={() => {}}
        sortingOptionsVisible={false}
        setSortingOptionsVisible={() => {}}
      />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
