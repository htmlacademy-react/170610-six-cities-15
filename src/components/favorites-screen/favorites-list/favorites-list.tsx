import FavoritesItem from '../favorites-item/favorites-item.tsx';

function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list" data-testid="favorites-list">
      <FavoritesItem />
    </ul>
  );
}

export default FavoritesList;
