import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Tabs from '../../components/common/tabs/tabs';
import OffersSection from '../../components/main-screen/offers-section/offers-section';
import SortOffers from '../../components/main-screen/sort-offers/sort-offers';
import Header from '../../components/ui/header/header/header';
import { Cities, Sorting, citiesNames } from '../../const';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/app-data/app-data.selectors';
import { getCity } from '../../store/app-process/app-process.selectors';
import { filterOffersByCityName } from '../../utils/common';
import ErrorScreen from '../error-screen/error-screen';

function MainScreen(): JSX.Element {
  const [sortOption, setSortOption] = useState<string>(Sorting.Popular);
  const [sortingOptionsVisible, setSortingOptionsVisible] =
    useState<boolean>(false);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getCity);
  const cityMap = activeCity in Cities ? activeCity : undefined;

  const handleOfferHover = useCallback(
    (offerId: string) => {
      setHoveredOfferId(offerId);
    },
    [setHoveredOfferId]
  );

  const handleSort = useCallback(
    (option: string) => {
      setSortOption(option);
    },
    [setSortOption]
  );

  const handleSortOptionClick = () => {
    setSortingOptionsVisible(true);
  };

  if (offers.length === 0) {
    return <ErrorScreen />;
  }

  if (cityMap === undefined) {
    return <p>Map not found</p>;
  }

  const filteredOffers = filterOffersByCityName(offers, activeCity);

  const sortedOffers = SortOffers(filteredOffers, sortOption);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities :: Main :: {activeCity}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={citiesNames} />
        <OffersSection
          activeCity={activeCity}
          filteredOffers={sortedOffers}
          hoveredOfferId={hoveredOfferId}
          handleOfferHover={handleOfferHover}
          sortingOptionsVisible={sortingOptionsVisible}
          setSortingOptionsVisible={setSortingOptionsVisible}
          handleSortOptionClick={handleSortOptionClick}
          handleSort={handleSort}
          sortOption={sortOption}
        />
      </main>
    </div>
  );
}

export default MainScreen;
