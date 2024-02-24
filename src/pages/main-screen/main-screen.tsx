import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Header from '../../components/ui/header/header';
import Tabs from '../../components/tabs/tabs';
import OffersList from '../../components/offers-list/offers-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Map from '../../components/map/map';
import { filterOffersByCityName } from '../../utils/common';
import { cities, sortingOptions } from '../../const';

function MainScreen(): JSX.Element {
  const citiesNames = Object.values(cities);
  const allOffers = useAppSelector((state) => state.app.allOffers);
  const activeCity = useAppSelector((state) => state.app.city);

  const [sortOption, setSortOption] = useState<string>(sortingOptions.POPULAR);

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const filteredOffers = filterOffersByCityName(allOffers, activeCity);

  switch (sortOption) {
    case sortingOptions.POPULAR:
      break;
    case sortingOptions.PRICE_LOW_TO_HIGH:
      filteredOffers.sort((a, b) => a.offer.price - b.offer.price);
      break;
    case sortingOptions.PRICE_HIGH_TO_LOW:
      filteredOffers.sort((a, b) => b.offer.price - a.offer.price);
      break;
    case sortingOptions.TOP_RATED_FIRST:
      filteredOffers.sort((a, b) => b.offer.rating - a.offer.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities :: Main</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={citiesNames} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {activeCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  {sortOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortingOptions handleSort={handleSort} />
              </form>
              <OffersList
                offers={filteredOffers}
                className="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  defaultLatitude={52.379189}
                  defaultLongitude={4.899431}
                  defaultZoom={12}
                  markersData={filteredOffers}
                  maxWidth={682}
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
