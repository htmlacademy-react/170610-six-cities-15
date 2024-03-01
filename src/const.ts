export const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const PIN_MARKER_DEFAULT = 'img/pin.svg';
export const PIN_MARKER_CURRENT = 'img/pin-active.svg';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
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

export const cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

export const cityCoordinates = [
  {
    name: 'PARIS',
    latitude: 48.85661,
    longitude: 2.351499,
  },
  {
    name: 'COLOGNE',
    latitude: 50.938361,
    longitude: 6.959974,
  },
  {
    name: 'BRUSSELS',
    latitude: 50.846557,
    longitude: 4.351697,
  },
  {
    name: 'AMSTERDAM',
    latitude: 52.37454,
    longitude: 4.889689,
  },
  {
    name: 'HAMBURG',
    latitude: 53.551086,
    longitude: 10.000654,
  },
  {
    name: 'DUSSELDORF',
    latitude: 51.225402,
    longitude: 6.776314,
  },
];

export const sortingOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;
