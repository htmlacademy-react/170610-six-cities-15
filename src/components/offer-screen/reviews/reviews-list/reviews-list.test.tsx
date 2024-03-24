import { render, screen } from '@testing-library/react';
import { makeFakeComment } from '../../../../utils/mocks';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const mockComment = makeFakeComment();
    const mockComments = Array.from({ length: 5 }, () => mockComment);
    const reviewsListElementTestId = 'reviewsListElement';

    render(<ReviewsList comments={mockComments} />);

    expect(screen.getByTestId(reviewsListElementTestId)).toBeInTheDocument();
  });
});
