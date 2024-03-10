import { TOffers } from '../../../types/offer.ts';
import OffersList from '../../main-screen/offers-list/offers-list.tsx';

type NearbyOffersProps = {
  slicedNearbyOffers: TOffers;
};

function NearbyOffers({ slicedNearbyOffers }: NearbyOffersProps): JSX.Element {
  if (slicedNearbyOffers.length === 0) {
    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighborhood not found, sorry
          </h2>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighborhood</h2>
        <OffersList
          offers={slicedNearbyOffers}
          className="near-places__list places__list"
        />
      </section>
    </div>
  );
}

export default NearbyOffers;
