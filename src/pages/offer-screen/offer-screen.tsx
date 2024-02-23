import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { OfferWithComments } from '../../types/offerWithComments';

type OfferScreenProps = {
  props: OfferWithComments[];
  find: OfferWithComments[];
  slice: OfferWithComments[];
};

function OfferScreen({ props }: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const foundOffer = props.find((item) => item.offer.id === id);
  const neighborhoodOffers = props.slice(0, 3);

  if (!foundOffer) {
    return <NotFoundScreen />;
  }

  const { offer, comments } = foundOffer;

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
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={uuidv4()}>
                  <img className="offer__image" src={image} alt="Offer" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
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
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList comments={comments} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              defaultLatitude={52.379189}
              defaultLongitude={4.899431}
              defaultZoom={12}
              markersData={neighborhoodOffers}
              maxWidth={1144}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <OffersList
              props={neighborhoodOffers}
              map={[]}
              className="near-places__list places__list"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
