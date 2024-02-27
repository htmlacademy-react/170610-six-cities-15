import { Offers } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoritesListProps = {
  favoriteOffers: Offers;
};

function FavoritesList({ favoriteOffers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesItem favoriteOffers={favoriteOffers} />
    </ul>
  );
}

export default FavoritesList;
