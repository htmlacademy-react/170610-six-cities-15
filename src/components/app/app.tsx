import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { OfferWithComments } from '../../types/offerWithComments';

type AppScreenProps = {
  props: OfferWithComments[];
  filter: OfferWithComments[];
  length: number;
};

function App({ props }: AppScreenProps): JSX.Element {
  const favoriteOffers = props.filter(
    (offer) => offer.offer.isFavorite === true
  );

  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<MainScreen props={props} length={props.length} />}
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
              element={<OfferScreen props={props} find={[]} slice={[]} />}
            />
            <Route
              path={AppRoute.DevFavorites}
              element={<FavoritesScreen favoriteOffers={favoriteOffers} />}
            />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
