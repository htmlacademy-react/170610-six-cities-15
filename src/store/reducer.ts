import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities } from '../const';
import { Offer, Offers } from '../types/offer';
import {
  loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  setActiveCity,
  setFavoriteOffersDataLoadingStatus,
  setOffersDataLoadingStatus,
  loadOffer,
  setOfferDataLoadingStatus,
} from './action';

type InitialState = {
  offers: Offers;
  favoriteOffers: Offers;
  offer: Offer;
  city: string;
  authorizationStatus: AuthorizationStatus;
  isOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  favoriteOffers: [],
  offer: {
    id: '',
    title: '',
    type: '',
    price: 0,
    previewImage: '',
    city: { name: '', location: { latitude: 0, longitude: 0, zoom: 0 } },
    location: { latitude: 0, longitude: 0, zoom: 0 },
    isFavorite: false,
    isPremium: false,
    rating: 0,
    description: '',
    bedrooms: 0,
    goods: [],
    host: { name: '', avatarUrl: '', isPro: false },
    images: [],
    maxAdults: 0,
  },
  city: cities.PARIS,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOfferDataLoading: false,
  isOffersDataLoading: false,
  isFavoriteOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isFavoriteOffersDataLoading = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
