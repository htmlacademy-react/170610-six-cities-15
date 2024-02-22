export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  DevFavorites = '/dev-favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ratingsData = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];
