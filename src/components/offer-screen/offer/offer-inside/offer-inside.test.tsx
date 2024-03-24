import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../../../utils/mocks';
import OfferInside from './offer-inside';

describe('Component: OfferInside', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const { goods } = mockOffer;
    const expectedText = new RegExp(/What['’]s\s+inside/i);

    render(<OfferInside goods={goods} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
