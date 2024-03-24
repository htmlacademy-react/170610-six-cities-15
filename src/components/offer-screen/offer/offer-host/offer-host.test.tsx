import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../../../utils/mocks';
import OfferHost from './offer-host';

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    const mockOffer = makeFakeOffer();
    const { host, description } = mockOffer;
    const expectedText = 'Meet the host';

    render(
      <OfferHost isAvatarPro={''} host={host} description={description} />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
