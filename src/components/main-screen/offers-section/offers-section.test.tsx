import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { DEFAULT_CITY_NAME } from '../../../const';
import { withHistory } from '../../../utils/mock-component';
import { getRandomNumber, makeFakeOffer } from '../../../utils/mocks';
import OffersSection from './offers-section';

describe('Component: OffersSection', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockOffers = Array.from({ length: getRandomNumber(0, 5) }, () =>
      makeFakeOffer()
    );
    const expectedText = 'Places';
    const withHistoryComponent = withHistory(
      <OffersSection
        activeCity={DEFAULT_CITY_NAME}
        filteredOffers={mockOffers}
        hoveredOfferId={null}
        handleOfferHover={() => {}}
        sortingOptionsVisible={false}
        handleSortOptionClick={() => {}}
        handleSort={() => {}}
        sortOption=""
        setSortingOptionsVisible={() => {}}
      />,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
