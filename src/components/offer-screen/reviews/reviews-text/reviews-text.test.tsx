import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../../../utils/mocks';
import ReviewsText from './reviews-text';

describe('Component: ReviewsText', () => {
  it('should render correctly', () => {
    const reviewsTextElementTestId = 'reviewsTextElement';
    const mockComment = makeFakeComment();

    render(<ReviewsText comment={mockComment} />);

    expect(screen.getByTestId(reviewsTextElementTestId)).toBeInTheDocument();
  });
});
