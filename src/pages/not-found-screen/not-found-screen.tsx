import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function NotFoundScreen(): JSX.Element {
  const isOfferDataLoading = useAppSelector(
    (state) => state.isOfferDataLoading
  );

  if (isOfferDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities :: 404 Not Found</title>
      </Helmet>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 Not Found</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment.
                  Please, go{' '}
                  <Link to="/" style={{ textDecoration: 'underline' }}>
                    back to the main page
                  </Link>
                  .
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
