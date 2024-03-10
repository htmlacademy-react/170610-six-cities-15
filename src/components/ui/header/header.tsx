import { useEffect } from 'react';
import { AuthorizationStatus } from '../../../const';
import {
  fetchFavoriteOffersAction,
  fetchUserDataAction,
  logoutAction,
} from '../../../store/api-actions';
import { getFavoriteOffers } from '../../../store/app-data/app-data.selectors';
import {
  getAuthorizationStatus,
  getUserData,
} from '../../../store/user-process/user-process.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Logo from '../logo/logo';
import UnauthenticatedUser from './unauthenticated-user/unauthenticated-user';
import AuthenticatedUser from './аuthenticated-user/аuthenticated-user';

function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersCount = favoriteOffers.length;
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchUserDataAction());
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, authorizationStatus]);

  const handleLogout = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const renderAuthLinks = () =>
    authorizationStatus === AuthorizationStatus.Auth ? (
      <AuthenticatedUser
        userData={userData}
        favoriteOffersCount={favoriteOffersCount}
        onLogout={(evt: React.FormEvent) => handleLogout(evt)}
      />
    ) : (
      <UnauthenticatedUser />
    );

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
