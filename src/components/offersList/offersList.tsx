import Card from '../card/card';
import { OfferWithComments } from '../../types/offerWithComments';

type OffersListProps = {
  data: OfferWithComments[];
};


function OffersList({ data }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {data.map(({ offer }) => (<Card key={offer.id} offer={offer}/>))}
    </div>
  );
}

export default OffersList;
