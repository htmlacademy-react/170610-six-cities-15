import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';

type TabsProps = {
  cities: string[];
};

function Tabs({ cities }: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  const handleCityClick = (city: string) => {
    dispatch(setActiveCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              {/* Добавляет класс активности, если текущий город совпадает с city */}
              <a
                href="#"
                className={`locations__item-link tabs__item ${
                  activeCity === city ? 'tabs__item--active' : ''
                }`}
                onClick={() => handleCityClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/favorites">
              <span>Favorites</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/login">
              <span>Login</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link className="locations__item-link tabs__item" to="/logout">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
