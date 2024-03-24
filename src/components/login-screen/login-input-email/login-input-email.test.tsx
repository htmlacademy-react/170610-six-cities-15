import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should render correctly when user enter email', async () => {
    const emailElementTestId = 'emailElement';
    const expectedEmailValue = 'sofanad957@nimadir.com';

    const preparedComponent = <LoginInputEmail loginRef={{ current: null }} />;

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
  });
});
