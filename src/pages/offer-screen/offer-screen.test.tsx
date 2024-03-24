import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import OfferScreen from './offer-screen';

describe('Component: OfferScreen', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const offerMainPageElementTestId = 'offerMainPageElement';

    const withHistoryComponent = withHistory(<OfferScreen />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(offerMainPageElementTestId)).toBeInTheDocument();
  });
});
