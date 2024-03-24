import { render, screen } from '@testing-library/react';
import { makeFakeUser } from '../../../../utils/mocks';
import ReviewsAvatar from './reviews-avatar';

describe('Component: ReviewsAvatar', () => {
  it('should render correctly', () => {
    const mockUser = makeFakeUser();
    const expectedAltText = 'Reviews avatar';

    render(<ReviewsAvatar user={mockUser} />);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
