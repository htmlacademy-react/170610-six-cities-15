import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/action';

type TabsProps = {
  cities: string[];
};

function Tabs({ cities }: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.app.city);

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
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
