import { useState } from 'react';
import Card from '../card/card';
import { OfferWithComments } from '../../types/offerWithComments';

type NeighborhoodOffersListProps = {
  props: OfferWithComments[];
  map: OfferWithComments[];
};

function NeighborhoodOffersList({
  props,
}: NeighborhoodOffersListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="near-places__list places__list">
      {props.map(({ offer }) => (
        <Card
          key={offer.id}
          offer={offer}
          isActive={activeCardId === offer.id}
          onMouseEnter={() => handleCardMouseEnter(offer.id)}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default NeighborhoodOffersList;
