import { render, screen } from '@testing-library/react';
import LoginInputPassword from './login-input-password';

describe('Component: LoginInputPassword', () => {
  it('should render correctly', () => {
    const expectedText = 'Password';
    const expectedPlaceholder = 'Password';

    render(<LoginInputPassword passwordRef={{ current: null }} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(expectedPlaceholder)
    ).toBeInTheDocument();
  });
});
