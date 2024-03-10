import FavoritesItem from '../favorites-item/favorites-item.tsx';

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesItem />
    </ul>
  );
}

export default FavoritesList;
