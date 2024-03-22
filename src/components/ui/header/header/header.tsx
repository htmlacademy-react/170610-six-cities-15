import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
  fetchFavoriteOffersAction,
  fetchUserDataAction,
  logoutAction,
} from '../../../../store/api-actions';
import { getFavoriteOffers } from '../../../../store/app-data/app-data.selectors';
import {
  getAuthorizationStatus,
  getUserData,
} from '../../../../store/user-process/user-process.selectors';
import Logo from '../../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import UnauthenticatedUser from '../unauthenticated-user/unauthenticated-user';
import AuthenticatedUser from '../аuthenticated-user/аuthenticated-user';

function Header() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersCount = favoriteOffers.length;
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchUserDataAction());
      dispatch(fetchFavoriteOffersAction());
    }
    return () => {
      isMounted = false;
    };
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

  const location = useLocation();

  let isMainPage = false;
  let isLoginPage = false;

  switch (true) {
    case location.pathname === String(AppRoute.Main):
      isMainPage = true;
      break;
    case location.pathname === String(AppRoute.Login):
      isLoginPage = true;
      break;
    default:
      isLoginPage = false;
  }

  const isHeaderNav = isLoginPage ? (
    ''
  ) : (
    <HeaderNav renderAuthLinks={renderAuthLinks} />
  );

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              classPrefix="header"
              width={'81'}
              height={'41'}
              isMainPage={isMainPage}
            />
          </div>
          {isHeaderNav}
        </div>
      </div>
    </header>
  );
}

export default Header;
