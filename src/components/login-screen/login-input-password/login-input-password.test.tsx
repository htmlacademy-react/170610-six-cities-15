import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should render correctly when user enter password', async () => {
    const passwordElementTestId = 'passwordElement';
    const expectedPasswordValue = '123456';

    const preparedComponent = (
      <LoginInputPassword passwordRef={{ current: null }} />
    );

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue
    );

    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
