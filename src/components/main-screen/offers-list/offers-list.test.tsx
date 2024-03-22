import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../utils/mock-component';
import {
  getRandomNumber,
  makeFakeOffer,
  makeFakeStore,
} from '../../../utils/mocks';
import OffersList from './offers-list';

describe('Component: OffersList', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockOffers = Array.from({ length: getRandomNumber(0, 5) }, () =>
      makeFakeOffer()
    );

    const testId = 'offers-list';

    const withHistoryComponent = withHistory(
      <OffersList offers={mockOffers} />,
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
