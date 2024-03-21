import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import {
  AppRoute,
  AuthorizationStatus,
  DEFAULT_OFFER_DATA,
  DEFAULT_USER_DATA,
} from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import {
  getRandomNumber,
  makeFakeOffer,
  makeFakeStore,
} from '../../utils/mocks';
import App from './app';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(/Places/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    const signInTitle = screen.getByTestId('login-title');
    expect(signInTitle).toHaveTextContent(/Sign in/i);
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore({
        DATA: {
          offers: [],
          isOffersDataLoading: false,
          hasError: false,
          isToggleFavoriteLoading: false,
          offer: DEFAULT_OFFER_DATA,
          isOfferDataLoading: false,
          comments: [],
          nearbyOffers: [],
          favoriteOffers: Array.from({ length: getRandomNumber(1, 5) }, () =>
            makeFakeOffer()
          ),
          isCommentDataSending: false,
          hasSubmitError: false,
          hasOfferDataLoadingError: false,
        },
        USER: {
          authorizationStatus: AuthorizationStatus.Auth,
          userData: DEFAULT_USER_DATA,
          isUserDataLoading: false,
        },
      })
    );
    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "OfferScreen" when user navigate to "/offer/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(AppRoute.Offer);

    render(withStoreComponent);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });
});
