import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeCity } from '../../../store/app-process/app-process.slice';

type LocationsProps = {
  randomCity: string;
};

function Locations({ randomCity }: LocationsProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleCityClick(city: string) {
    dispatch(changeCity({ city }));
  }

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item" data-testid="locationsItemElement">
        <Link
          onClick={() => handleCityClick(randomCity)}
          className="locations__item-link"
          to={AppRoute.Main}
        >
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}

export default Locations;
