import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';
import { TOffer } from '../../../types/offer.ts';
import { renderStars } from '../../../utils/common.ts';
import MemoizedBookmarkButton from '../bookmark-button/bookmark-button.tsx';
import { capitalizeFirstLetter } from '../../../utils/common.ts';

type CardProps = {
  offer: TOffer;
  isActive?: boolean;
  onOfferHover?: (offerId: string) => void;
  isFavoriteItem?: boolean;
  width: string;
  height: string;
};

function Card({
  offer,
  isActive,
  onOfferHover,
  isFavoriteItem,
  width,
  height,
}: CardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    rating,
    previewImage,
    isFavorite,
    isPremium,
  } = offer;

  const location = useLocation();
  let pagePrefix;

  switch (true) {
    case location.pathname === String(AppRoute.Main):
      pagePrefix = 'cities';
      break;
    case /^\/offer\//.test(location.pathname):
      pagePrefix = 'near-places';
      break;
    case location.pathname === String(AppRoute.Favorites):
      pagePrefix = 'favorites';
      break;
    default:
      pagePrefix = 'cities';
  }

  const wrapperClassName = `${
    isFavoriteItem ? 'favorites' : 'cities'
  }__image-wrapper place-card__image-wrapper`;

  return (
    <article
      className={`${pagePrefix}__card place-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onOfferHover && onOfferHover(id)}
      onMouseLeave={() => onOfferHover && onOfferHover('')}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${wrapperClassName}`}>
        <Link to={`/offer/${id}`}>
          {' '}
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`place-card__info ${
          pagePrefix === 'favorites' ? 'favorites__card-info' : ''
        }`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MemoizedBookmarkButton
            id={id}
            isFavorite={isFavorite}
            width={'18'}
            height={'19'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: renderStars(rating) }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;
