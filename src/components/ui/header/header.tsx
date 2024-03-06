import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { logoutAction } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Logo from '../logo/logo';

function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  // const favoritesCount = useAppSelector((state) => state.favoriteOffers.length);

  const renderAuthLinks = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
        <>
          <div className="header__nav-item user">
            <Link
              to={AppRoute.Favorites}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
              {/* <span className="header__favorite-count">{favoritesCount}</span> */}
              <span className="header__favorite-count">111</span>
            </Link>
          </div>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Main}
              onClick={(evt) => {
                evt.preventDefault();
                // dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      );
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">{renderAuthLinks()}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
