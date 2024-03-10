import { Helmet } from 'react-helmet-async';
import Tabs from '../../components/common/tabs/tabs';
import ErrorStatus from '../../components/error-screen/error-status/error-status';
import Header from '../../components/ui/header/header';
import { citiesNames } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-process/app-process.selectors';

function ErrorScreen(): JSX.Element {
  const activeCity = useAppSelector(getCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={citiesNames} />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <ErrorStatus activeCity={activeCity} />
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorScreen;
