import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import generateOffersWithComments from './mocks/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers = generateOffersWithComments();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} />
    </Provider>
  </React.StrictMode>
);
