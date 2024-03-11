import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LogoProps = {
  classPrefix: string;
  width: string;
  height: string;
};

function Logo({ classPrefix, width, height }: LogoProps): JSX.Element {
  // const isActive =
  //   classPrefix === 'header' ? `${classPrefix}__logo-link--active` : '';

  return (
    <Link
      // className={`${classPrefix}__logo-link ${isActive}`}
      className={`${classPrefix}__logo-link`}
      to={AppRoute.Main}
    >
      <img
        className={`${classPrefix}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
