import { Link } from 'react-router-dom';
type LocationsItemProps = {
  city: string;
};

function LocationsItem({ city }: LocationsItemProps): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={`/?city=${city}`}>
          <span>{city}</span>
        </Link>
      </div>
    </div>
  );
}

export default LocationsItem;
