/* eslint-disable no-console */
import { toast } from 'react-toastify';
import { CommentPostProp } from '../types/comment-type';
import { FilmServerProp } from '../types/film-type';
import { ThunkActionResult } from '../types/thunk-type';
import { UserLoginProp } from '../types/user-type';
import { convertServerFilmToClient } from '../utils/adapter';
import { APIRoute, AuthType } from '../utils/const';
import { removeToken, setToken } from '../utils/token';
import { setAuthorizeStatus, setCurrentFilm, setCurrentReviews, setFilms, setMyListFilms, setPromoFilm, setSimilarFilms } from './actions';

export const checkAutorizeStatus = ():ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    await api.get(`${APIRoute.LOGIN}`);
    dispatch(setAuthorizeStatus(AuthType.AUTH));
  } catch {
    toast.warn('You are not authorized', {
      autoClose: 3000,
    });
  }
};

export const loginToCite = (prop : UserLoginProp):ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.post(`${APIRoute.LOGIN}`, prop);
  setToken(response.data.token);
  dispatch(setAuthorizeStatus(AuthType.AUTH));
};

export const LogoutFromCite = ():ThunkActionResult => async (dispatch, _getState, api) => {
  await api.delete(`${APIRoute.LOGOUT}`);
  removeToken();
  dispatch(setAuthorizeStatus(AuthType.NO_AUTH));
};

export const getFilmsFromServer = ():ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.FILMS}`);
  dispatch(setFilms(response.data.map((film : FilmServerProp) => convertServerFilmToClient(film))));
};

export const getFilmById = (id:number):ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.FILMS}${id}`);
  dispatch(setCurrentFilm(convertServerFilmToClient(response.data)));
};

export const getSimilarFilms = (id: number):ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.FILMS}/${id}/similar`);
  dispatch(setSimilarFilms(response.data));
};

export const getPromoFilm = ():ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.PROMO}`);
  dispatch(setPromoFilm(response.data));
};

export const getMyListFilms = ():ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.FAVORITE}`);
  dispatch(setMyListFilms(response.data));
};

export const addToMyListFilms = (id: number, status: number):ThunkActionResult => async (_dispatch, _getState, api) => {
  // may be should update films in reducer here
  await api.post(`${APIRoute.FAVORITE}/${id}/${status}`);
};

export const getCommentsByFilm = (id: number):ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.COMMENTS}/${id}`);
  dispatch(setCurrentReviews(response.data));
};

export const sendComment = (id: number, comment: CommentPostProp):ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const response = await api.post(`${APIRoute.COMMENTS}/${id}`);
    dispatch(setCurrentReviews(response.data));
  };


