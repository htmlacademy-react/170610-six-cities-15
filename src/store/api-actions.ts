import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { TAuthData } from '../types/auth-data';
import { TCommentData, TComments } from '../types/comment.js';
import { TOffer, TOffers } from '../types/offer.js';
import { TAppDispatch, TState } from '../types/state.js';
import { TUserData } from '../types/user-data';

import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setCommentsDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<TOffers>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

/*----------------------------------------*/

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffer>(`/offers/${id}`);
  dispatch(setOfferDataLoadingStatus(true));
  dispatch(loadOffer(data));
  dispatch(setOfferDataLoadingStatus(false));
});

export const fetchCommentsAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/loadComments', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TComments>(`/comments/${id}`);
  dispatch(setCommentsDataLoadingStatus(true));
  dispatch(loadComments(data));
  dispatch(setCommentsDataLoadingStatus(false));
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/loadNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<TOffers>(`/offers/${id}/nearby`);
  dispatch(setNearbyOffersDataLoadingStatus(true));
  dispatch(loadNearbyOffers(data));
  dispatch(setNearbyOffersDataLoadingStatus(false));
});

/*----------------------------------------*/

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFavoriteOffersDataLoadingStatus(true));
  const { data } = await api.get<TOffers>(APIRoute.Favorite);
  dispatch(setFavoriteOffersDataLoadingStatus(false));
  dispatch(loadFavoriteOffers(data));
});

/*----------------------------------------*/

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

/*----------------------------------------*/

export const loginAction = createAsyncThunk<
  void,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const toggleFavoriteAction = createAsyncThunk<
  void,
  { id: string | undefined; status: number },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'app/toggleFavoriteOffer',
  async ({ id, status }, { dispatch, extra: api }) => {
    await api.post<TOffer>(`/favorite/${id}/${status}`, {
      id,
      status,
    });
    await dispatch(fetchOfferAction(id));
    await dispatch(fetchFavoriteOffersAction());
    await dispatch(fetchOffersAction());
  }
);

/*----------------------------------------*/

export const postCommentAction = createAsyncThunk<
  void,
  TCommentData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'data/postComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<TCommentData>(`/comments/${id}`, {
      comment,
      rating,
    });
    return data;
  }
);

export const postCommentAndUpdateOffersAction =
  (commentData: TCommentData) => async (dispatch: TAppDispatch) => {
    await dispatch(postCommentAction(commentData));
    await dispatch(fetchCommentsAction(commentData.id));
  };
/*----------------------------------------*/
