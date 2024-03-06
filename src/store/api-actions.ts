import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { TAuthData } from '../types/auth-data';
import { TCommentData, TComments } from '../types/comment.js';
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
>('app/toggleFavoriteOffer', async ({ id, status }, { extra: api }) => {
  const { data } = await api.post<TOffer>(`/favorite/${id}/${status}`);
  return data;
});

/* !!! Не разобрано */

export const fetchOfferAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferDataLoadingStatus(true));
  const { data } = await api.get<TOffer>(`/offers/${id}`);
  dispatch(setOfferDataLoadingStatus(false));
  dispatch(loadOffer(data));
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
  dispatch(setCommentsDataLoadingStatus(true));
  const { data } = await api.get<TComments>(`/comments/${id}`);
  dispatch(setCommentsDataLoadingStatus(false));
  dispatch(loadComments(data));
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
  dispatch(setNearbyOffersDataLoadingStatus(true));
  const { data } = await api.get<TOffers>(`/offers/${id}/nearby`);
  dispatch(setNearbyOffersDataLoadingStatus(false));
  dispatch(loadNearbyOffers(data));
});

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

export const postCommentAction = createAsyncThunk<
  void,
  TCommentData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/postComment', async ({ id, comment, rating }, { extra: api }) => {
  await api.post<TCommentData>(`/comments/${id}`, {
    comment,
    rating,
  });
});

// export const postCommentAndUpdateOffersAction =
//   (commentData: TCommentData) => async (dispatch: TAppDispatch) => {
//     await dispatch(postCommentAction(commentData));
//     await dispatch(fetchCommentsAction(commentData.id));
//   };
