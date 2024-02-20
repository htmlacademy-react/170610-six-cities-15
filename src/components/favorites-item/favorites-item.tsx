import { OfferWithComments } from '../../types/offerWithComments';
import LocationsItem from '../locations-item/locations-item';
import FavoritesCard from '../favorites-card/favorites-card';

type FavoritesItemProps = {
  favoriteOffers: OfferWithComments[];
};

function FavoritesItem({ favoriteOffers }: FavoritesItemProps): JSX.Element {
  const favoritesCitiesSet = new Set<string>();
  favoriteOffers.forEach((offer) => {
    favoritesCitiesSet.add(offer.offer.city.name);
  });

  const favoritesCities = Array.from(favoritesCitiesSet);

  function filterFavoriteOffersByCityName(
    offers: OfferWithComments[],
    cityName: string
  ): OfferWithComments[] {
    return offers.filter((offer) => offer.offer.city.name === cityName);
  }

  return (
    <ul>
      {favoritesCities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <LocationsItem city={city} />
          <div className="favorites__places">
            {filterFavoriteOffersByCityName(favoriteOffers, city).map(
              (offer) => (
                <FavoritesCard key={offer.offer.id} offer={offer} />
              )
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesItem;
