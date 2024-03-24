import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Locations from '../../components/login-screen/locations/locations';
import LoginForm from '../../components/login-screen/login-form/login-form';
import Header from '../../components/ui/header/header/header';
import { citiesNames } from '../../const';
import { getRandomCityName } from '../../utils/common';

function LoginScreen(): JSX.Element {
  const randomCityName = getRandomCityName(citiesNames);
  const [randomCity, setRandomCity] = useState(randomCityName);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setRandomCity(randomCityName);
    }
    return () => {
      isMounted = false;
    };
  }, [randomCityName]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities :: Login</title>
      </Helmet>
      <Header />
      <main
        className="page__main page__main--login"
        data-testid="login-main-page"
      >
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title" data-testid="loginTitleElement">
              Sign in
            </h1>
            <LoginForm />
          </section>
          <Locations randomCity={randomCity} />
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
