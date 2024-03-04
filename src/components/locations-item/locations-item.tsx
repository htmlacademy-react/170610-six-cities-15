import { Link } from 'react-router-dom';
import { setActiveCity } from '../../store/action';
import { store } from '../../store';

type LocationsItemProps = {
  city: string;
};

function handleCityClick(city: string) {
  store.dispatch(setActiveCity(city));
}

function LocationsItem({ city }: LocationsItemProps): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={`/?city=${city}`}>
          <span onClick={() => handleCityClick(city)}>{city}</span>
        </Link>
      </div>
    </div>
  );
}

export default LocationsItem;
