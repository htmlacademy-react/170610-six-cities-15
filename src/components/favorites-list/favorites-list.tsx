import FavoritesItem from '../favorites-item/favorites-item';
import { OfferWithComments } from '../../types/offerWithComments';

type FavoritesListProps = {
  favoriteOffers: OfferWithComments[];
};

function FavoritesList({ favoriteOffers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesItem favoriteOffers={favoriteOffers} />
    </ul>
  );
}

export default FavoritesList;
