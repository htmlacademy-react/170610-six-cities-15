import { render, screen } from '@testing-library/react';
import LoginInputEmail from './login-input-email';

describe('Component: LoginInputEmail', () => {
  it('should render correctly', () => {
    const expectedText = 'E-mail';
    const expectedPlaceholder = 'Email';

    render(<LoginInputEmail loginRef={{ current: null }} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(expectedPlaceholder)
    ).toBeInTheDocument();
  });
});
