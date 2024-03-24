import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { citiesNames } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import Tabs from './tabs';

describe('Component: Tabs', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockCities = citiesNames;
    const tabsElementTestId = 'tabsElement';

    const withHistoryComponent = withHistory(
      <Tabs cities={mockCities} />,
      mockHistory
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(tabsElementTestId)).toBeInTheDocument();
  });
});
