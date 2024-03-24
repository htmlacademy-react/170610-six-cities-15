import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../../../utils/mocks';
import ReviewsItem from './reviews-item';

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const reviewsItemElementTestId = 'reviewsItemElement';
    const mockComment = makeFakeComment();

    render(<ReviewsItem comment={mockComment} />);

    expect(screen.getByTestId(reviewsItemElementTestId)).toBeInTheDocument();
  });
});
