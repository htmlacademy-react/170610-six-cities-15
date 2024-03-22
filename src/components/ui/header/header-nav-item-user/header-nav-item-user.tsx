import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const.ts';

type HeaderNavItemUserProps = {
  userData: { email: string; avatarUrl: string };
  favoriteOffersCount: number;
};

function HeaderNavItemUser({
  userData,
  favoriteOffersCount,
}: HeaderNavItemUserProps): JSX.Element {
  return (
    <div className="header__nav-item user" data-testid="header-nav-item-user">
      <Link
        to={AppRoute.Favorites}
        className="header__nav-link header__nav-link--profile"
      >
        <div
          className="header__avatar-wrapper user__avatar-wrapper"
          style={{ backgroundImage: `url(${userData?.avatarUrl})` }}
        />
        <span className="header__user-name user__name">{userData.email}</span>
        <span className="header__favorite-count">{favoriteOffersCount}</span>
      </Link>
    </div>
  );
}

export default HeaderNavItemUser;
