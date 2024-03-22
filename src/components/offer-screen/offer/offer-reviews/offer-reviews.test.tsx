import { render, screen } from '@testing-library/react';
import { withStore } from '../../../../utils/mock-component';
import { makeFakeComment, makeFakeStore } from '../../../../utils/mocks';
import OfferReviews from './offer-reviews';

describe('Component: OfferReviews', () => {
  it('should render correctly', () => {
    const mockComment = makeFakeComment();
    const mockComments = Array.from({ length: 5 }, () => mockComment);
    const expectedText = new RegExp(/Reviews/i);

    const { withStoreComponent } = withStore(
      <OfferReviews comments={mockComments} />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
