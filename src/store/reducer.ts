import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { TComments } from '../types/comment';
import { TOffer, TOffers } from '../types/offer';
import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  setActiveCity,
  setFavoriteOffersDataLoadingStatus,
  setOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setCommentsDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
} from './action';

type InitialState = {
  offer: TOffer;
  offers: TOffers;
  favoriteOffers: TOffers;
  nearbyOffers: TOffers;
  city: string;
  comments: TComments;
  isOfferDataLoading: boolean;
  isOffersDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
};

const initialState: InitialState = {
  offer: {} as TOffer,
  offers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  city: cities.PARIS,
  comments: [],
  isOfferDataLoading: false,
  isOffersDataLoading: false,
  isCommentsDataLoading: false,
  isNearbyOffersDataLoading: false,
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentsDataLoadingStatus, (state, action) => {
      state.isCommentsDataLoading = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNearbyOffersDataLoadingStatus, (state, action) => {
      state.isNearbyOffersDataLoading = action.payload;
    });
});

export { reducer };
