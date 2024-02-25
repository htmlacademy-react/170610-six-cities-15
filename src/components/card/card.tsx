import { Offer } from '../../types/offer';
import { getRandomArrayElement } from '../../utils/common';
import { Link } from 'react-router-dom';

type CardProps = {
  offer: Offer;
  isActive: boolean;
  onOfferHover: (offerId: string) => void; // Добавляем проп для обработки наведения мыши на карточку
};

function Card({ offer, isActive, onOfferHover }: CardProps): JSX.Element {
  const { id, title, type, price, rating, images, isFavorite, isPremium } =
    offer;

  const img = getRandomArrayElement(images);

  const isFavoriteClass = isFavorite
    ? 'place-card__bookmark-button--active'
    : '';

  return (
    <article
      className={`cities__card place-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onOfferHover(id)} // Добавляем обработчик наведения мыши на карточку
      onMouseLeave={() => onOfferHover('')} // Добавляем обработчик ухода мыши с карточки
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          {' '}
          {/* Используем Link для навигации */}
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavoriteClass} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <Link to={`/offer/${id}`}>
          <h2 className="place-card__name">{title}</h2>
        </Link>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
