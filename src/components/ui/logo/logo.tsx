import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { logoSrcPath, logoSrcAlt } from '../../../const.ts';

type LogoProps = {
  classPrefix: string;
  width: string;
  height: string;
  isMainPage?: boolean;
};

function Logo({
  classPrefix,
  width,
  height,
  isMainPage = false,
}: LogoProps): JSX.Element {
  const isActiveClass = isMainPage ? `${classPrefix}__logo-link--active` : '';

  return (
    <Link
      className={`${classPrefix}__logo-link ${isActiveClass}`}
      to={AppRoute.Main}
    >
      <img
        className={`${classPrefix}__logo`}
        src={logoSrcPath}
        alt={logoSrcAlt}
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
