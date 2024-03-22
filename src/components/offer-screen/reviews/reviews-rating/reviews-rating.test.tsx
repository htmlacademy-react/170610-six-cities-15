import { render, screen } from '@testing-library/react';
import { getRandomNumber } from '../../../../utils/mocks';
import ReviewsRating from './reviews-rating';

describe('Component: ReviewsRating', () => {
  it('should render correctly', () => {
    const expectedText = 'Rating';

    render(<ReviewsRating rating={getRandomNumber(1, 5)} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
