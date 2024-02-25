import Card from '../card/card';
import { OfferWithComments } from '../../types/offerWithComments';

type OffersListProps = {
  offers: OfferWithComments[];
  className?: string;
  onOfferHover?: (offerId: string) => void; // Сделаем onOfferHover опциональным добавив знак вопроса
};

function OffersList({
  offers,
  className,
  onOfferHover = () => {}, // Устанавливаем значение по умолчанию как пустая функция
}: OffersListProps): JSX.Element {
  return (
    <div className={`${className}`}>
      {offers.map(({ offer }) => (
        <Card
          key={offer.id}
          offer={offer}
          isActive={false} // Устанавливаем isActive по умолчанию как false
          onOfferHover={onOfferHover} // Передаем колбэк onOfferHover для обработки наведения мыши на карточку
        />
      ))}
    </div>
  );
}

export default OffersList;
