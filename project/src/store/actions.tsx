import { createAction } from '@reduxjs/toolkit';
import { CommentProp } from '../types/comment-type';
import { FilmClientProp } from '../types/film-type';
import { AuthType, GenreType } from '../utils/const';

const enum Actions {
  setFilms = 'app/setFilms',
  setCurrentGenre = 'app/setCurrentGenre',
  setCurrentFilm = 'app/setCurrentFilm',
  setCurrentReviews = 'app/setCurrentReviews',
  setAuthorizeStatus = 'user/setAuthorizeStatus',
}

export const setFilms = createAction<FilmClientProp[]>(Actions.setFilms);

export const setCurrentGenre = createAction<GenreType>(Actions.setCurrentGenre);

export const setCurrentFilm = createAction<FilmClientProp>(Actions.setCurrentFilm);

export const setCurrentReviews = createAction<CommentProp[]>(Actions.setCurrentReviews);

export const setAuthorizeStatus = createAction<AuthType>(Actions.setAuthorizeStatus);
