import MemoizedCard from '../../common/card/card.tsx';
import { TOffers } from '../../../types/offer.ts';

type OffersListProps = {
  offers: TOffers;
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
        <MemoizedCard
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
