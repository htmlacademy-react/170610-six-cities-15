import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AuthorizationStatus, DEFAULT_STATE } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../../utils/mocks';
import NearbyOffers from './nearby-offers';

describe('Component: NearbyOffers', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly when there are nearby offers', () => {
    const expectedText = 'Other places in the neighborhood';
    const mockSlicedNearbyOffers = Array.from({ length: 5 }, () =>
      makeFakeOffer()
    );

    const withHistoryComponent = withHistory(
      <NearbyOffers slicedNearbyOffers={mockSlicedNearbyOffers} />,
      mockHistory
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          ...DEFAULT_STATE.DATA,
          nearbyOffers: mockSlicedNearbyOffers,
        },
        USER: {
          ...DEFAULT_STATE.USER,
          authorizationStatus: AuthorizationStatus.Auth,
        },
      })
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correctly when there are no nearby offers', () => {
    const expectedText = 'Other places in the neighborhood not found, sorry';

    render(<NearbyOffers slicedNearbyOffers={[]} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
