import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/ui/header/header';
import { cities, cityCoordinates, sortingOptions } from '../../const';
import { useAppSelector } from '../../hooks';
import { filterOffersByCityName } from '../../utils/common';

function MainScreen(): JSX.Element {
  const citiesNames = Object.values(cities);

  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.city);

  const [sortOption, setSortOption] = useState<string>(sortingOptions.POPULAR);
  const [sortingOptionsVisible, setSortingOptionsVisible] =
    useState<boolean>(false);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

  const handleSortOptionClick = () => {
    setSortingOptionsVisible(true);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const handleOfferHover = (offerId: string) => {
    setHoveredOfferId(offerId);
  };

  const activeCityCoordinates = cityCoordinates.find(
    (city) => city.name.toUpperCase() === activeCity.toUpperCase()
  );

  const filteredOffers = filterOffersByCityName(offers, activeCity);

  switch (sortOption) {
    case sortingOptions.POPULAR:
      break;
    case sortingOptions.PRICE_LOW_TO_HIGH:
      filteredOffers.sort((a, b) => a.price - b.price);
      break;
    case sortingOptions.PRICE_HIGH_TO_LOW:
      filteredOffers.sort((a, b) => b.price - a.price);
      break;
    case sortingOptions.TOP_RATED_FIRST:
      filteredOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities :: Main :: {activeCity}</title>
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
                <span
                  className="places__sorting-type"
                  tabIndex={0}
                  onClick={handleSortOptionClick}
                >
                  {sortOption}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {sortingOptionsVisible && (
                  <SortingOptions
                    handleSort={handleSort}
                    setSortingOptionsVisible={setSortingOptionsVisible}
                  />
                )}
              </form>
              <OffersList
                offers={filteredOffers}
                onOfferHover={handleOfferHover}
                className="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  defaultLatitude={activeCityCoordinates?.latitude}
                  defaultLongitude={activeCityCoordinates?.longitude}
                  defaultZoom={12}
                  markersData={filteredOffers}
                  maxWidth={682}
                  hoveredOfferId={hoveredOfferId ?? undefined}
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
