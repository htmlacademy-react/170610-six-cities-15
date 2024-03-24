import { render, screen } from '@testing-library/react';
import { getRandomNumber } from '../../../../utils/mocks';
import OfferPrice from './offer-price';

describe('Component: OfferPrice', () => {
  it('should render correctly', () => {
    const expectedText = 'night';

    render(<OfferPrice price={getRandomNumber(1, 1000)} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
