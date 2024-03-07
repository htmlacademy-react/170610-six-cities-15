import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { TAuthData } from '../types/auth-data';
import { TComment, TCommentData, TComments } from '../types/comment.js';
import { TOffer, TOffers } from '../types/offer.js';
import { TAppDispatch, TState } from '../types/state.js';
import { TUserData } from '../types/user-data';
import { redirectToRoute } from './action';

/* User - Process */

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  await api.get(APIRoute.Login);
});

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
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

/* App Data  */

export const fetchOffersAction = createAsyncThunk<
  TOffers,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOffers>(APIRoute.Offers);
  return data;
});

export const toggleFavoriteAction = createAsyncThunk<
  TOffer,
  { id: string | undefined; status: number },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/toggleFavoriteOffer', async ({ id, status }, { extra: api }) => {
  const { data } = await api.post<TOffer>(`/favorite/${id}/${status}`);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  TOffer,
  string,
  { extra: AxiosInstance }
>('data/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<TOffer>(`/offers/${id}`);
  return data;
});

export const fetchCommentsAction = createAsyncThunk<
  TComments,
  string,
  { extra: AxiosInstance }
>('data/fetchComments', async (id, { extra: api }) => {
  const { data } = await api.get<TComments>(`/comments/${id}`);
  return data;
});

export const fetchNearbyOffersAction = createAsyncThunk<
  TOffers,
  string,
  { extra: AxiosInstance }
>('data/loadNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<TOffers>(`/offers/${id}/nearby`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  TComment,
  TCommentData,
  { extra: AxiosInstance }
>('offers/postComment', async ({ id, comment, rating }, { extra: api }) => {
  const { data } = await api.post<TComment>(`/comments/${id}`, {
    comment,
    rating,
  });
  return data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  TOffers,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOffers>(APIRoute.Favorite);
  return data;
});
