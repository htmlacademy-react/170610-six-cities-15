import { render, screen } from '@testing-library/react';
import { datatype } from 'faker';
import { getRandomNumber } from '../../../../utils/mocks';
import OfferGallery from './offer-gallery';

describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const galleryContainerTestId = 'offer-gallery-container';
    const galleryTestId = 'offer-gallery';
    const mockImages = Array.from({ length: getRandomNumber(0, 5) }, () =>
      datatype.uuid()
    );

    render(<OfferGallery images={mockImages} />);

    expect(screen.getByTestId(galleryContainerTestId)).toBeInTheDocument();
    expect(screen.getByTestId(galleryTestId)).toBeInTheDocument();
  });
});
