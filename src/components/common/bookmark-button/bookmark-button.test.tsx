import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../../utils/mocks';
import BookmarkButton from './bookmark-button';

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const { id } = mockOffer;
    const expectedText = 'To bookmarks';

    const { withStoreComponent } = withStore(
      <BookmarkButton
        isOfferScreen={false}
        isFavorite={false}
        id={id}
        width="32"
        height="32"
      />,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
