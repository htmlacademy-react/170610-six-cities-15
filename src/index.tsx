import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import generateOffersWithComments from './mocks/data';

const offers = generateOffersWithComments();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>
);
