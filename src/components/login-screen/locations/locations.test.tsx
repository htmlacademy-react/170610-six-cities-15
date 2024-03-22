import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { citiesNames } from '../../../const';
import { getRandomCityName } from '../../../utils/common';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import Locations from './locations';

describe('Component: Locations', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const testId = 'locations-item';
    const mockCityName = getRandomCityName(citiesNames);

    const withHistoryComponent = withHistory(
      <Locations randomCity={mockCityName} />,
      mockHistory
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(mockCityName)).toBeInTheDocument();
  });
});
