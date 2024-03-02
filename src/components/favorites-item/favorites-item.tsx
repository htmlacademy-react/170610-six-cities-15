import { filterOffersByCityName } from '../../utils/common';
import Card from '../card/card';
import LocationsItem from '../locations-item/locations-item';
import { useAppSelector } from '../../hooks';

function FavoritesItem(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

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
              <Card
                key={offer.id}
                offer={offer}
                isFavoriteItem
                width="150"
                height="110"
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesItem;
