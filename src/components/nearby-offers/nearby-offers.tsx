import OffersList from '../offers-list/offers-list';
import { TOffers } from '../../types/offer';

type NearbyOffersProps = {
  slicedNearbyOffers: TOffers;
};

function NearbyOffers({ slicedNearbyOffers }: NearbyOffersProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighborhood</h2>
      <OffersList
        offers={slicedNearbyOffers}
        className="near-places__list places__list"
      />
    </section>
  );
}

export default NearbyOffers;
