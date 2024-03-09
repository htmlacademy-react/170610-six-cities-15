import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import browserHistory from '../../browser-history';

type Reducer = {
  app: {
    redirectToRoute: (action: PayloadAction<string>) => void;
  };
};
export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'app/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
