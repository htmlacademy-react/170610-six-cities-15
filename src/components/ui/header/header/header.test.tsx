import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../../utils/mock-component';
import { makeFakeStore } from '../../../../utils/mocks';
import Header from './header';

describe('Component: Header', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const headerElementTestId = 'headerElement';
    const withHistoryComponent = withHistory(<Header />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByTestId(headerElementTestId)).toBeInTheDocument();
  });
});
