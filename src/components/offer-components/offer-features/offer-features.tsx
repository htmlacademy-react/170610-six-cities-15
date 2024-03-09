import { TOffer } from '../../../types/offer.ts';
type OfferFeaturesProps = {
  type: TOffer;
  bedrooms: TOffer;
  maxAdults: TOffer;
};

function OfferFeatures({
  type,
  bedrooms,
  maxAdults,
}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{type}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
      </li>
    </ul>
  );
}

export default OfferFeatures;
