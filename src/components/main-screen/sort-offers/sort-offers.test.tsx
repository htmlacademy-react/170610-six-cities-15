import { Sorting } from '../../../const';
import { TOffer } from '../../../types/offer';
import { makeFakeOffer } from '../../../utils/mocks';
import SortOffers from './sort-offers';

describe('Component: SortOffers', () => {
  it('should return the original "offers" array when "sortOption" is "Popular"', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from({ length: 5 }, () => mockOffer);

    const sortOption = Sorting.Popular;

    const result = SortOffers(mockOffers, sortOption);

    expect(result).toEqual(mockOffers);
  });

  it('should return the original "offers" array when "offers" is an empty array', () => {
    const mockOffers: TOffer[] = [];
    const sortOption = Sorting.LowToHighPrice;

    const result = SortOffers(mockOffers, sortOption);

    expect(result).toEqual(mockOffers);
  });
});
