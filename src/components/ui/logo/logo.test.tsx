import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { AppRoute } from '../../../const';
import { withHistory } from '../../../utils/mock-component';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render a Link component with the correct class and to prop', () => {
    const classPrefix = 'logo';
    const width = '100px';
    const height = '50px';
    const isMainPage = true;
    const expectedAltText = '6 cities logo';
    const preparedComponent = withHistory(
      <Logo
        classPrefix={classPrefix}
        width={width}
        height={height}
        isMainPage={isMainPage}
      />
    );

    render(preparedComponent);

    const linkElement = screen.getByRole('link');
    const expectedClassName = `${classPrefix}__logo-link ${
      isMainPage ? `${classPrefix}__logo-link--active` : ''
    }`;

    expect(linkElement).toHaveClass(expectedClassName);
    expect(linkElement).toHaveAttribute('href', AppRoute.Main);
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
  it('should render a Link component without the active class when isMainPage is undefined', () => {
    const classPrefix = 'logo';
    const width = '100px';
    const height = '50px';

    const preparedComponent = withHistory(
      <Logo classPrefix={classPrefix} width={width} height={height} />
    );

    render(preparedComponent);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass(`${classPrefix}__logo-link`);
    expect(linkElement).toHaveAttribute('href', AppRoute.Main);
  });
});
