enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  DevFavorites = '/dev-favorites',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const ratingsData = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

const cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

export { AppRoute, AuthorizationStatus, ratingsData, cities };
