import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Header from '../../components/ui/header/header';
import {
  Cities,
  MAX_OFFER_SCREEN_COMMENTS_COUNT,
  MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT,
  cityCoordinates,
} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchCommentsAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
} from '../../store/api-actions';
import {
  getComments,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
} from '../../store/app-data/app-data.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { TComments } from '../../types/comment';
import { TOffer, TOffers } from '../../types/offer';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offers = useAppSelector(getOffers);
  const idExists = offers.some((offerItem) => offerItem.id === id);
  const offer = useAppSelector<TOffer>(getOffer);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const comments = useAppSelector<TComments>(getComments);
  const sortedComments = comments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_OFFER_SCREEN_COMMENTS_COUNT);

  const nearbyOffers = useAppSelector<TOffers>(getNearbyOffers);
  const slicedNearbyOffers = nearbyOffers.slice(
    0,
    MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT
  );
  const combinedOffersToMap = [offer, ...slicedNearbyOffers];
  const cityName = offer?.city.name ?? Cities.Paris;

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === cityName.toLowerCase()
  );

  // console.log(authorizationStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [dispatch, id]);

  if (!idExists) {
    return <NotFoundScreen />;
  }

  if (
    isOfferDataLoading
    // isNearbyOffersDataLoading ||
    // isCommentsDataLoading
  ) {
    return (
      <>
        <Helmet>
          <title>Loading offer...</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    isFavorite,
  } = offer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities :: Offer</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images?.map((image) => (
                <div className="offer__image-wrapper" key={uuidv4()}>
                  <img className="offer__image" src={image} alt="Offer" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                <BookmarkButton
                  id={id}
                  isFavorite={isFavorite}
                  width={'31'}
                  height={'33'}
                  isOfferScreen
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods?.map((good) => (
                    <li className="offer__inside-item" key={uuidv4()}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={host?.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host?.name}</span>
                  {host?.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                {sortedComments && <ReviewsList comments={sortedComments} />}
                {String(authorizationStatus) === 'AUTH' && <ReviewsForm />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            {nearbyOffers.length > 0 && (
              <Map
                city={activeCityCoordinates}
                activePoint={id || ''}
                offers={combinedOffersToMap}
                page={'offer'}
                maxWidth={1144}
              />
            )}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <OffersList
              offers={slicedNearbyOffers}
              className="near-places__list places__list"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
