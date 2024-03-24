import { render, screen } from '@testing-library/react';
import HeaderNav from './header-nav';

describe('Component: HeaderNav', () => {
  it('should render correctly', () => {
    const headerNavElementTestId = 'headerNavElement';

    render(<HeaderNav renderAuthLinks={() => <div></div>} />);

    expect(screen.getByTestId(headerNavElementTestId)).toBeInTheDocument();
  });
});
