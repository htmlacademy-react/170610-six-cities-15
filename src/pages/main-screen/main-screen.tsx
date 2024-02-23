import { Helmet } from 'react-helmet-async';
import Header from '../../components/ui/header/header';
import Tabs from '../../components/tabs/tabs';
import OffersList from '../../components/offers-list/offers-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { OfferWithComments } from '../../types/offerWithComments';
import Map from '../../components/map/map';
import { cities } from '../../const';

type MainScreenProps = {
  props: OfferWithComments[];
  length: number;
};

function MainScreen({ props, length }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities :: Main</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {length} places to stay in Amsterdam{' '}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortingOptions />
              </form>
              <OffersList
                props={props}
                map={[]}
                className="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  defaultLatitude={52.379189}
                  defaultLongitude={4.899431}
                  defaultZoom={12}
                  markersData={props}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
