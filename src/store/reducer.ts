import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities } from '../const';
import { Comments } from '../types/comment';
import { Offer, Offers } from '../types/offer';
import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setActiveCity,
  setFavoriteOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';

type InitialState = {
  offer: Offer;
  offers: Offers;
  favoriteOffers: Offers;
  nearbyOffers: Offers;
  city: string;
  comments: Comments;
  authorizationStatus: AuthorizationStatus;
  isOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
};

const initialState: InitialState = {
  offer: {} as Offer,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  city: cities.PARIS,
  comments: [],
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
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
