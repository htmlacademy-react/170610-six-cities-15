import { useAppSelector } from '../../../hooks';
import { getFavoriteOffers } from '../../../store/app-data/app-data.selectors.ts';
import { filterOffersByCityName } from '../../../utils/common.ts';
import Card from '../../common/card/card.tsx';
import LocationsItem from '../../common/locations-item/locations-item.tsx';

function FavoritesItem(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesCitiesSet = new Set<string>();
  favoriteOffers.forEach((offer) => {
    favoritesCitiesSet.add(offer.city.name);
  });
  const favoritesCities = Array.from(favoritesCitiesSet);

  return (
    <>
      {favoritesCities.map((city) => (
        <li
          className="favorites__locations-items"
          key={city}
          data-testid="favoritesItemElement"
        >
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
    </>
  );
}

export default FavoritesItem;
