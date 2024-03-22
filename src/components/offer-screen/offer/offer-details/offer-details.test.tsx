import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../../../utils/mocks';
import OfferDetails from './offer-details';

describe('Component: OfferDetails', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'offer-details';
    const mockOffer = makeFakeOffer();
    const withHistoryComponent = withHistory(
      <OfferDetails
        offer={mockOffer}
        isPremium={false}
        isFavorite={false}
        id={mockOffer.id}
        comments={[]}
      />,
      mockHistory
    );

    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
