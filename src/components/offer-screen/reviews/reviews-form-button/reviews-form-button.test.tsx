import { render, screen } from '@testing-library/react';
import ReviewsFormButton from './reviews-form-button';

describe('Component: ReviewsFormButton', () => {
  it('should render correctly', () => {
    const expectedText = 'Submit';

    render(
      <ReviewsFormButton review={''} isFormDisabled={false} rating={''} />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
