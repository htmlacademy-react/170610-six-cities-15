import { render, screen } from '@testing-library/react';
import { getRandomNumber } from '../../../../utils/mocks';
import OfferRating from './offer-rating';

describe('Component: OfferRating', () => {
  it('should render correctly', () => {
    const expectedText = 'Rating';

    render(<OfferRating rating={getRandomNumber(1, 5)} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
