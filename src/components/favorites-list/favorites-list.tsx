import FavoritesItem from '../favorites-item/favorites-item';

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesItem />
    </ul>
  );
}

export default FavoritesList;
