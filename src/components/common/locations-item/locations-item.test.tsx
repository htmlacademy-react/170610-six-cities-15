import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { citiesNames } from '../../../const';
import { getRandomCityName } from '../../../utils/common';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import LocationsItem from './locations-item';

describe('Component: LocationsItem', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const locationsItemElementTestId = 'locationsItemElement';
    const mockCityName = getRandomCityName(citiesNames);

    const withHistoryComponent = withHistory(
      <LocationsItem city={mockCityName} />,
      mockHistory
    );
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(locationsItemElementTestId)).toBeInTheDocument();
  });
});
