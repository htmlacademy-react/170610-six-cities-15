import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TAppData } from '../../types/state';
import {
  fetchCommentsAction,
  fetchFavoriteOffersAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchUserDataAction,
  postCommentAction,
  toggleFavoriteAction,
} from '../api-actions';

const initialState: TAppData = {
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
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(toggleFavoriteAction.pending, (state) => {
        state.isToggleFavoriteLoading = true;
        state.hasError = false;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const { id, isFavorite } = action.payload;
        const findOfferById = (offer: TOffer) => offer.id === id;

        state.offers = state.offers.map((offer) =>
          findOfferById(offer) ? { ...offer, isFavorite } : offer
        );

        if (state.offer && findOfferById(state.offer)) {
          state.offer.isFavorite = isFavorite;
        }

        state.nearbyOffers = state.nearbyOffers.map((offer) =>
          findOfferById(offer) ? { ...offer, isFavorite } : offer
        );

        const existingIndex = state.favoriteOffers.findIndex(
          (offer) => offer.id === id
        );
        if (existingIndex !== -1) {
          state.favoriteOffers.splice(existingIndex, 1);
        } else {
          state.favoriteOffers.push(action.payload);
        }

        state.isToggleFavoriteLoading = false;
      })
      .addCase(toggleFavoriteAction.rejected, (state) => {
        state.isToggleFavoriteLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
        state.hasOfferDataLoadingError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferDataLoading = false;
        state.hasOfferDataLoadingError = false;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasOfferDataLoadingError = true;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentDataSending = true;
        state.hasSubmitError = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.isCommentDataSending = false;
        state.hasSubmitError = false;
        state.comments.push(action.payload);
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isCommentDataSending = false;
        state.hasSubmitError = true;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchUserDataAction.pending, (state) => {
        state.isUserDataLoading = true;
      })
      .addCase(fetchUserDataAction.fulfilled, (state, action) => {
        state.isUserDataLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserDataAction.rejected, (state) => {
        state.isUserDataLoading = false;
      });
  },
});
