import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import MapSection from '../../components/offer-screen/map-section/map-section';
import NearbyOffers from '../../components/offer-screen/nearby-offers/nearby-offers';
import OfferDetails from '../../components/offer-screen/offer/offer-details/offer-details';
import OfferGallery from '../../components/offer-screen/offer/offer-gallery/offer-gallery';
import Header from '../../components/ui/header/header';
import {
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
import { TOffers } from '../../types/offer';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  const offers = useAppSelector(getOffers);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const hasError = useAppSelector(getErrorOfferLoadingStatus);
  const offer = useAppSelector(getOffer);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const comments = useAppSelector(getComments);
  const selectedCity = offers.find((offerItem) => offerItem.id === id)?.city;
  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toLowerCase() === selectedCity?.name.toLowerCase()
  );
  const [slicedNearbyOffers, setSlicedNearbyOffers] = useState<TOffers>([]);
  const [offersToMap, setOffersToMap] = useState<TOffers>([]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setSlicedNearbyOffers(
      nearbyOffers.slice(0, MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT)
    );
  }, [nearbyOffers]);

  useEffect(() => {
    setOffersToMap([offer, ...slicedNearbyOffers]);
  }, [offer, slicedNearbyOffers]);

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

  return (
    <div className="page">
      <Helmet>
        <title>6 cities :: Offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <OfferGallery images={offer.images} />
        <OfferDetails
          offer={offer}
          isPremium={offer.isPremium}
          isFavorite={offer.isFavorite}
          id={id}
          comments={comments}
        />
        <MapSection
          city={activeCityCoordinates}
          activeOfferId={id}
          offers={offersToMap}
          page={'offer'}
        />
        <div className="container">
          <NearbyOffers slicedNearbyOffers={slicedNearbyOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
