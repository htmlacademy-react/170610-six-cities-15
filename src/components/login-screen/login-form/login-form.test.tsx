import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  it('should render correctly', () => {
    const expectedButtonText = 'Sign in';
    const expectedEMailText = 'E-mail';
    const expectedPasswordText = 'Password';

    const { withStoreComponent } = withStore(<LoginForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedButtonText)).toBeInTheDocument();
    expect(screen.getByText(expectedEMailText)).toBeInTheDocument();
    expect(screen.getByText(expectedPasswordText)).toBeInTheDocument();
  });
});
