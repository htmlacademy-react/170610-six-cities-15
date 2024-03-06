export const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;
export const PIN_MARKER_DEFAULT = 'img/pin.svg';
export const PIN_MARKER_CURRENT = 'img/pin-active.svg';
export const MAP_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const MAP_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
export const MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT = 3;

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
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12,
    },
  },
  {
    name: 'COLOGNE',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
    },
  },
  {
    name: 'BRUSSELS',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12,
    },
  },
  {
    name: 'AMSTERDAM',
    location: {
      latitude: 52.37454,
      longitude: 4.889689,
      zoom: 12,
    },
  },
  {
    name: 'HAMBURG',
    location: {
      latitude: 53.551086,
      longitude: 10.000654,
      zoom: 12,
    },
  },
  {
    name: 'DUSSELDORF',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12,
    },
  },
];

export enum Sorting {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
