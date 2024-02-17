import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import generateOffersWithComments from './mocks/data';

const data = generateOffersWithComments();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalPlacesCount={data.length} />
  </React.StrictMode>
);
