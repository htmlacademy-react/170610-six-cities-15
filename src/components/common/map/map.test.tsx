import { render, screen } from '@testing-library/react';
import { getRandomNumber, makeFakeOffer } from '../../../utils/mocks';
import Map from './map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const mockOffers = Array.from({ length: getRandomNumber(0, 5) }, () =>
      makeFakeOffer()
    );
    const testId = 'map';

    render(
      <Map
        city={undefined}
        activeOfferId={null}
        offers={mockOffers}
        page={''}
      />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
