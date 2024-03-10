import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../const';

type AuthenticatedUserProps = {
  userData: { email: string; avatarUrl: string };
  favoriteOffersCount: number;
  onLogout: (evt: React.FormEvent) => void;
};

function AuthenticatedUser({
  userData,
  favoriteOffersCount,
  onLogout,
}: AuthenticatedUserProps) {
  return (
    <>
      <div className="header__nav-item user">
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
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={onLogout}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default AuthenticatedUser;
