import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../../../utils/mocks';
import OfferFeatures from './offer-features';

describe('Component: OfferFeatures', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const { type, bedrooms, maxAdults } = mockOffer;

    render(
      <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
    );

    expect(screen.getByText(type)).toBeInTheDocument();
  });
});
