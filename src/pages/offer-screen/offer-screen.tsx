import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Header from '../../components/ui/header/header';
import { cityCoordinates } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offer, Offers } from '../../types/offer';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function OfferScreen(): JSX.Element {
  const offers = useAppSelector<Offers>((state) => state.offers);
  const selectedOffer = useAppSelector<Offer>((state) => state.offer);
  const nearbyOffers = useAppSelector<Offers>((state) => state.nearbyOffers);
  const comments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const activeCity = useAppSelector((state) => state.city);

  const isOfferDataLoading = useAppSelector(
    (state) => state.isOfferDataLoading
  );

  if (isOfferDataLoading) {
    return <LoadingScreen />;
  }

  const {
    id,
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
  } = selectedOffer;

  const isOfferIdValid = (offerID: string): boolean =>
    offers.some((offer) => offer.id === offerID);

  if (!isOfferIdValid(id)) {
    return <NotFoundScreen />;
  }

  const sortedComments = comments
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toUpperCase() === activeCity.toUpperCase()
  );

  const mapOffers = [selectedOffer, ...nearbyOffers.slice(0, 3)];

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
              {images.map((image) => (
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
                  {goods.map((good) => (
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
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && (
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
                <ReviewsList comments={sortedComments.slice(0, 10)} />
                {String(authorizationStatus) === 'AUTH' && <ReviewsForm />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              defaultLatitude={activeCityCoordinates?.latitude}
              defaultLongitude={activeCityCoordinates?.longitude}
              defaultZoom={12}
              markersData={mapOffers}
              maxWidth={1144}
              hoveredOfferId={selectedOffer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighborhood
              </h2>
              <OffersList
                offers={nearbyOffers}
                className="near-places__list places__list"
              />
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
