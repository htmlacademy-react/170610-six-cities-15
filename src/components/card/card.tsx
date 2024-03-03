import { Link } from 'react-router-dom';
import { store } from '../../store';
import { fetchOfferAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';

type CardProps = {
  offer: Offer;
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

  const handleOfferClick = (offerId: string) => {
    store.dispatch(fetchOfferAction(offerId));
  };

  const articleClassName = `${
    isFavoriteItem ? 'favorites__card place-card' : 'cities__card place-card'
  }`;
  const wrapperClassName = `${
    isFavoriteItem
      ? 'favorites__image-wrapper place-card__image-wrapper'
      : 'cities__image-wrapper place-card__image-wrapper'
  }`;

  return (
    <article
      className={` ${articleClassName} ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onOfferHover && onOfferHover(id)}
      onMouseLeave={() => onOfferHover && onOfferHover('')}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${wrapperClassName}`}>
        <img
          className="place-card__image"
          src={previewImage}
          width={width}
          height={height}
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            id={id}
            isFavorite={isFavorite}
            width={'18'}
            height={'19'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <Link to={`/offer/${id}`} onClick={() => handleOfferClick(id)}>
          <h2 className="place-card__name">{title}</h2>
        </Link>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
