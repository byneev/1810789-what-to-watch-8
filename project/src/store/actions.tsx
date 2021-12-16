import { createAction } from '@reduxjs/toolkit';
import { CommentProp } from '../types/comment-type';
import { FilmClientProp } from '../types/film-type';
import { AuthType, GenreType, TabType } from '../utils/const';

const enum Actions {
  setFilms = 'app/setFilms',
  setCurrentGenre = 'app/setCurrentGenre',
  setCurrentFilm = 'app/setCurrentFilm',
  setCurrentReviews = 'app/setCurrentReviews',
  setAuthorizeStatus = 'user/setAuthorizeStatus',
  setCurrentTab = 'app/setCurrentTab',
  setMyListFilms = 'user/setMyListFilms',
  setSimilarFilms = 'app/setSimilarFilms',
  setPromoFilm = 'app/setPromoFilm',
  setGenres = 'app/setGenres',
}

export const setFilms = createAction<FilmClientProp[]>(Actions.setFilms);

export const setCurrentGenre = createAction<GenreType>(Actions.setCurrentGenre);

export const setCurrentFilm = createAction<FilmClientProp | null>(Actions.setCurrentFilm);

export const setCurrentReviews = createAction<CommentProp[]>(Actions.setCurrentReviews);

export const setAuthorizeStatus = createAction<AuthType>(Actions.setAuthorizeStatus);

export const setCurrentTab = createAction<TabType>(Actions.setCurrentTab);

export const setMyListFilms = createAction<FilmClientProp[]>(Actions.setMyListFilms);

export const setSimilarFilms = createAction<FilmClientProp[]>(Actions.setSimilarFilms);

export const setPromoFilm = createAction<FilmClientProp>(Actions.setPromoFilm);

export const setGenres = createAction<GenreType[]>(Actions.setGenres);
