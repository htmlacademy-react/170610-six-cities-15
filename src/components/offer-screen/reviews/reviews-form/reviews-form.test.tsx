import { render, screen } from '@testing-library/react';
import { withStore } from '../../../../utils/mock-component';
import { makeFakeStore } from '../../../../utils/mocks';
import ReviewsForm from './reviews-form';

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    const expectedText = 'Your review';

    const { withStoreComponent } = withStore(<ReviewsForm />, makeFakeStore());
    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
