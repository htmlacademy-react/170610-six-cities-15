import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import { getRandomNumber, makeFakeStore } from '../../../utils/mocks';
import RatingInput from './rating-input';

describe('Component: RatingInput', () => {
  it('should render correctly', () => {
    const mockRating = getRandomNumber(1, 5);

    const { withStoreComponent } = withStore(
      <RatingInput
        value={String(mockRating)}
        onChange={() => {}}
        checked={false}
        title={String(mockRating)}
        disabled
      />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByDisplayValue(mockRating)).toBeInTheDocument();
  });
});
