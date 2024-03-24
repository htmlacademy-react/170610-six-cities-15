import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../../const';
import { withHistory } from '../../../utils/mock-component';
import Footer from './footer';

describe('Component: Footer', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly when user navigate to "/favorites"', () => {
    const footerElementTestId = 'footerElement';
    const withHistoryComponent = withHistory(<Footer />, mockHistory);
    mockHistory.push(AppRoute.Favorites);

    render(withHistoryComponent);

    expect(screen.getByTestId(footerElementTestId)).toBeInTheDocument();
  });
});
