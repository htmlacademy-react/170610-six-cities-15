import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';
import {
  getAuthorizationStatus,
  getAuthCheckedStatus,
} from '../../store/user-process/user-process.selectors';
import { getOffersDataLoadingStatus } from '../../store/app-data/app-data.selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<MainScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
