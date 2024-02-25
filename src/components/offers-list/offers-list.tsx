import Card from '../card/card';
import { OfferWithComments } from '../../types/offerWithComments';

type OffersListProps = {
  offers: OfferWithComments[];
  className?: string;
  onOfferHover: (offerId: string) => void;
};

function OffersList({
  offers,
  className,
  onOfferHover,
}: OffersListProps): JSX.Element {
  return (
    <div className={`${className}`}>
      {offers.map(({ offer }) => (
        <Card
          key={offer.id}
          offer={offer}
          isActive={false} // Не забудьте передать этот проп, если он используется в компоненте Card
          onOfferHover={onOfferHover} // Передаем колбэк onOfferHover для обработки наведения мыши на карточку
        />
      ))}
    </div>
  );
}

export default OffersList;
