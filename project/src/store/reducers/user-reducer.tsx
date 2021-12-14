import { createReducer } from '@reduxjs/toolkit';
import { FilmClientProp } from '../../types/film-type';
import { AuthType, GenreType } from '../../utils/const';
import { setAuthorizeStatus, setCurrentGenre } from '../actions';

export type UserReducerProps = {
  authorizeStatus: AuthType,
  currentGenre: GenreType,
  myListFilms: FilmClientProp[],
}

export const initialUserState : UserReducerProps = {
  authorizeStatus : AuthType.UNKNOWN,
  currentGenre: GenreType.ALL,
  myListFilms: [],
};

export const UserReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setAuthorizeStatus, (state, { payload }) => {
      state.authorizeStatus = payload;
    }).addCase(setCurrentGenre, (state, { payload }) => {
      state.currentGenre = payload;
    });
});
