import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/app';
import { store } from './store';
import { clearOffer } from './store/action';
import {
  checkAuthAction,
  fetchFavoriteOffersAction,
  fetchOffersAction,
} from './store/api-actions';
import { Offer } from './types/offer';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteOffersAction());
store.dispatch(clearOffer({} as Offer));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
