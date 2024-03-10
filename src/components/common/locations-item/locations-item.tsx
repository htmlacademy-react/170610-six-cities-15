import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';
import { useAppDispatch } from '../../../hooks';
import { changeCity } from '../../../store/app-process/app-process.slice.ts';

type LocationsItemProps = {
  city: string;
};

function LocationsItem({ city }: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleCityClick() {
    dispatch(changeCity({ city }));
  }

  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoute.Main}>
          <span onClick={() => handleCityClick()}>{city}</span>
        </Link>
      </div>
    </div>
  );
}

export default LocationsItem;
