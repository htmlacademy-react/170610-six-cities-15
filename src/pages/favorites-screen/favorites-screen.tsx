import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FavoritesEmpty from '../../components/favorites-screen/favorites-empty/favorites-empty';
import FavoritesNotEmpty from '../../components/favorites-screen/favorites-not-empty/favorites-not-empty';
import Footer from '../../components/ui/footer/footer';
import Header from '../../components/ui/header/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/app-data/app-data.selectors';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchFavoriteOffersAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoritesEmptyClass = 'page--favorites-empty';
  const favoritesEmptyClassToggler =
    favoriteOffers.length === 0 ? favoritesEmptyClass : '';

  return (
    <div
      className={`page ${favoritesEmptyClassToggler}`}
      data-testid="favoritesPageElement"
    >
      <Helmet>
        <title>6 cities :: Favorites</title>
      </Helmet>
      <Header />

      {favoriteOffers.length === 0 ? <FavoritesEmpty /> : <FavoritesNotEmpty />}

      <Footer />
    </div>
  );
}

export default FavoritesScreen;
