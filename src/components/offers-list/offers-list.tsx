import { useState } from 'react';
import Card from '../card/card';
import { OfferWithComments } from '../../types/offerWithComments';

type OffersListProps = {
  offers: OfferWithComments[];
  className?: string;
  onOfferHover: (offerId: string) => void; // Добавляем колбэк для передачи ID предложения при наведении на карточку
};

function OffersList({
  offers,
  className,
  onOfferHover, // Передаем колбэк из пропсов
}: OffersListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => {
    setActiveCardId(id);
    onOfferHover(id); // Вызываем колбэк onOfferHover при наведении на карточку
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className={`${className}`}>
      {offers.map(({ offer }) => (
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

export default OffersList;
