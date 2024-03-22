import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeOffer, makeFakeStore } from '../../../utils/mocks';
import Card from './card';

describe('Component: Card', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const testId = 'card';

    const withHistoryComponent = withHistory(
      <Card
        offer={mockOffer}
        isActive={false}
        onOfferHover={() => {}}
        width="260"
        height="200"
        isFavoriteItem
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
