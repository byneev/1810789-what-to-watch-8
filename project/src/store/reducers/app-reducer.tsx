import {  TabType } from '../../utils/const';
import { CommentProp } from '../../types/comment-type';
import { createReducer } from '@reduxjs/toolkit';
import { setCurrentFilm, setCurrentReviews, setFilms, setSimilarFilms } from '../actions';
import { FilmClientProp } from '../../types/film-type';

export type AppReducerState = {
  films: FilmClientProp[],
  currentFilm: null | FilmClientProp,
  currentReviews: CommentProp[],
  promoFilm: null | FilmClientProp,
  currentTab: TabType,
  similarFilms: FilmClientProp[],
}

export const initialAppState : AppReducerState = {
  films: [],
  currentFilm: null,
  currentReviews: [],
  promoFilm: null,
  currentTab: TabType.OVERVIEW,
  similarFilms: [],
};

export const AppReducer = createReducer(initialAppState, (builder) => {
  builder
    .addCase(setFilms, (state, { payload }) => {
      state.films = payload;
    }).addCase(setCurrentFilm, (state, { payload }) => {
      state.currentFilm = payload;
    }).addCase(setCurrentReviews, (state, { payload }) => {
      state.currentReviews = payload;
    }).addCase(setSimilarFilms, (state, { payload }) => {
      state.similarFilms = payload;
    });
});
