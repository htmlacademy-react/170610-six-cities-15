import { Offers } from '../../types/offer';
import { filterOffersByCityName } from '../../utils/common';
import FavoritesCard from '../favorites-card/favorites-card';
import LocationsItem from '../locations-item/locations-item';

type FavoritesItemProps = {
  favoriteOffers: Offers;
};

function FavoritesItem({ favoriteOffers }: FavoritesItemProps): JSX.Element {
  const favoritesCitiesSet = new Set<string>();
  favoriteOffers.forEach((offer) => {
    favoritesCitiesSet.add(offer.city.name);
  });

  const favoritesCities = Array.from(favoritesCitiesSet);

  return (
    <ul>
      {favoritesCities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <LocationsItem city={city} />
          <div className="favorites__places">
            {filterOffersByCityName(favoriteOffers, city).map((offer) => (
              <FavoritesCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesItem;
