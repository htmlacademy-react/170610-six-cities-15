import { render, screen } from '@testing-library/react';
import MapSection from './map-section';

describe('Component: MapSection', () => {
  it('should render correctly', () => {
    const mapSectionElementTestId = 'mapSectionElement';

    render(
      <MapSection city={undefined} activeOfferId={null} offers={[]} page="" />
    );

    expect(screen.getByTestId(mapSectionElementTestId)).toBeInTheDocument();
  });
});
