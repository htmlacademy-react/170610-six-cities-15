import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useDispatch } from 'react-redux';
import { setAllOffers } from '../../store/action';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { OfferWithComments } from '../../types/offerWithComments';

type AppScreenProps = {
  offers: OfferWithComments[];
};

function App({ offers }: AppScreenProps): JSX.Element {
  const dispatch = useDispatch();
  dispatch(setAllOffers(offers));

  const favoriteOffers = offers.filter((offer) => offer.offer.isFavorite);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen favoriteOffers={favoriteOffers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offers={offers} />}
          />
          <Route
            path={AppRoute.DevFavorites}
            element={<FavoritesScreen favoriteOffers={favoriteOffers} />}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
