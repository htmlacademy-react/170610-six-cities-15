import { render, screen } from '@testing-library/react';
import { withHistory } from '../../../utils/mock-component';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';
    const preparedComponent = withHistory(
      <Logo classPrefix="logo" width="30" height="30" />
    );

    render(preparedComponent);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
