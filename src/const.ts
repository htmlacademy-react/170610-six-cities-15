import leaflet from 'leaflet';
import { TAppData } from './types/state';

export const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const MAX_OFFER_SCREEN_NEARBY_OFFERS_COUNT = 3;
export const MAX_IMAGES_COUNT = 6;
export const MAX_OFFER_SCREEN_COMMENTS_COUNT = 10;

export const TILE_LAYER_URL_PATTERN =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const PIN_MARKER_DEFAULT = 'img/pin.svg';
export const PIN_MARKER_CURRENT = 'img/pin-active.svg';
export const DEFAULT_MAP_ZOOM = 5;

export const logoSrcPath = 'img/logo.svg';
export const logoSrcAlt = '6 cities logo';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Lose = '/lose',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
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

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const DEFAULT_CITY_NAME = Cities.Paris;

export const cityData = {
  Paris: { latitude: 48.85661, longitude: 2.351499 },
  Cologne: { latitude: 50.938361, longitude: 6.959974 },
  Brussels: { latitude: 50.846557, longitude: 4.351697 },
  Amsterdam: { latitude: 52.37454, longitude: 4.889689 },
  Hamburg: { latitude: 53.551086, longitude: 10.000654 },
  Dusseldorf: { latitude: 51.225402, longitude: 6.776314 },
};

export const citiesNames = Object.keys(cityData);

export const cityCoordinates = Object.entries(cityData).map(
  ([name, { latitude, longitude }]) => ({
    name: name.toUpperCase(),
    location: {
      latitude,
      longitude,
      zoom: 13,
    },
  })
);

export enum Sorting {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const activeMarkerIcon = leaflet.icon({
  iconUrl: PIN_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export const defaultMarkerIcon = leaflet.icon({
  iconUrl: PIN_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export const DEFAULT_STATE = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
  DATA: {
    offers: [],
    isOffersDataLoading: false,
    hasError: false,
    isToggleFavoriteLoading: false,
    offer: {} as TAppData['offer'],
    isOfferDataLoading: false,
    comments: [],
    nearbyOffers: [],
    favoriteOffers: [],
    isCommentDataSending: false,
    hasSubmitError: false,
    hasOfferDataLoadingError: false,
    isUserDataLoading: false,
    userData: {} as TAppData['userData'],
  },
  APP: { city: DEFAULT_CITY_NAME },
};
