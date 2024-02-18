import { Offer } from '../../types/offer';

type CardProps = {
  offer: Offer;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function Card({ offer, isActive, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {
  const { title, type, price, rating, isFavorite, isPremium } = offer;
  const fillWidth = (rating / 5) * 100;
  const isFavoriteClass = isFavorite ? 'place-card__bookmark-button--active' : '';
  const premiumMark = <div className="place-card__mark"><span>Premium</span></div>;
  const isPremiumMark = isPremium ? premiumMark : '';

  return (
    <article
      className={`cities__card place-card ${isActive ? 'active' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoriteClass} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${fillWidth}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
