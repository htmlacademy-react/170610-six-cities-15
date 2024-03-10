import { Map } from '../../common/map/map';
import { TCity, TOffers } from '../../../types/offer';

type MapSectionProps = {
  city: TCity | undefined;
  activeOfferId: string | null | undefined;
  offers: TOffers;
  page: string;
};

function MapSection({
  city,
  activeOfferId,
  offers,
  page,
}: MapSectionProps): JSX.Element {
  return (
    <Map
      city={city}
      activeOfferId={activeOfferId}
      offers={offers}
      page={page}
    />
  );
}

export default MapSection;
