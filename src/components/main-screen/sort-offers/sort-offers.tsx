import { TOffer } from '../../../types/offer';
import { Sorting } from '../../../const';

function SortOffers(offers: TOffer[], sortOption: string): TOffer[] {
  switch (sortOption) {
    case Sorting.Popular:
      return offers;
    case Sorting.LowToHighPrice:
      return offers.slice().sort((a, b) => a.price - b.price);
    case Sorting.HighToLowPrice:
      return offers.slice().sort((a, b) => b.price - a.price);
    case Sorting.TopRatedFirst:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export default SortOffers;
