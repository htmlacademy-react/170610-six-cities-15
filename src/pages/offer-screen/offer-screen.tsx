import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { Map } from '../../components/map/map';
import NearbyOffers from '../../components/offer-components/nearby-offers/nearby-offers';
import Header from '../../components/ui/header/header';
import {
  MAX_IMAGES,
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
  getErrorOfferLoadingStatus,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
} from '../../store/app-data/app-data.selectors';
import { TComments } from '../../types/comment';
import { TOffer, TOffers } from '../../types/offer';
import { renderStars } from '../../utils/common';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferReviews from '../../components/offer-components/offer-reviews/offer-reviews';

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string | undefined }>();

  const offers = useAppSelector(getOffers);
  const nearbyOffers = useAppSelector<TOffers>(getNearbyOffers);
  const hasError = useAppSelector(getErrorOfferLoadingStatus);
  const slicedNearbyOffers = nearbyOffers.slice(
    0,
    MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT
  );

  const offer = useAppSelector<TOffer>(getOffer);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);

  const comments = useAppSelector<TComments>(getComments);

  const selectedCity = offers.find((offerItem) => offerItem.id === id)?.city;

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === selectedCity?.name.toLowerCase()
  );
  // console.log(hasError);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [dispatch, id]);

  if (isOfferDataLoading) {
    return (
      <>
        <Helmet>
          <title>Loading offer...</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  if (hasError) {
    return (
      <>
        <Helmet>
          <title>NotFound...</title>
        </Helmet>
        <NotFoundScreen />
      </>
    );
  }

  const offersToMap = [offer, ...slicedNearbyOffers];

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

  const isAvatarPro = host?.isPro ? 'offer__avatar-wrapper--pro' : '';

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
              {images?.slice(0, MAX_IMAGES).map((pic) => (
                <div className="offer__image-wrapper" key={pic}>
                  <img className="offer__image" src={pic} alt="Photo studio" />
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
                <BookmarkButton
                  id={id}
                  isFavorite={isFavorite}
                  width={'31'}
                  height={'31'}
                  isOfferScreen
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: renderStars(rating) }}></span>
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
                  <div
                    className={`offer__avatar-wrapper ${
                      isAvatarPro ? 'offer__avatar-wrapper--pro' : ''
                    } user__avatar-wrapper`}
                  >
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
              <OfferReviews comments={comments} />
            </div>
          </div>

          {activeCityCoordinates && offer && (
            <Map
              city={activeCityCoordinates}
              activeOfferId={id}
              offers={offersToMap}
              page={'offer'}
            />
          )}
        </section>
        <div className="container">
          <NearbyOffers slicedNearbyOffers={slicedNearbyOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
