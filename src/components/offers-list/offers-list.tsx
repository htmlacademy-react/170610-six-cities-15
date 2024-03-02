import Card from '../card/card';
import { Offers } from '../../types/offer';

type OffersListProps = {
  offers: Offers;
  className?: string;
  isActive?: boolean;
  onOfferHover?: (offerId: string) => void;
};

function OffersList({
  offers,
  className,
  isActive = false,
  onOfferHover = () => {},
}: OffersListProps): JSX.Element {
  return (
    <div className={`${className}`}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          isActive={isActive}
          onOfferHover={onOfferHover}
          width="260"
          height="200"
        />
      ))}
    </div>
  );
}

export default OffersList;
