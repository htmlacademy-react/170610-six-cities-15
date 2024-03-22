import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import { makeFakeStore } from '../../../utils/mocks';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  it('should render correctly', () => {
    const expectedText = 'Sign in';

    const { withStoreComponent } = withStore(<LoginForm />, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
