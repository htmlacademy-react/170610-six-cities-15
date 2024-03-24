import { render, screen } from '@testing-library/react';
import { citiesNames } from '../../../const';
import { getRandomCityName } from '../../../utils/common';
import ErrorStatus from './error-status';

describe('Component: ErrorStatus', () => {
  it('should render correctly', () => {
    const expectedText = 'No places to stay available';
    const mockCityName = getRandomCityName(citiesNames);

    render(<ErrorStatus activeCity={mockCityName} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
