import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesNotEmpty from '../../components/favorites-not-empty/favorites-not-empty';
import Footer from '../../components/ui/footer/footer';
import Header from '../../components/ui/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/app-data/app-data.selectors';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
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
