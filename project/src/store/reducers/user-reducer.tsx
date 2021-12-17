import { createReducer } from '@reduxjs/toolkit';
import { FilmClientProp } from '../../types/film-type';
import { UserAuthClientProp } from '../../types/user-type';
import { AuthType, GenreType } from '../../utils/const';
import { setAuthorizeStatus, setCurrentGenre } from '../actions';

export type UserReducerProps = {
  authorizeStatus: AuthType,
  currentGenre: GenreType,
  myListFilms: FilmClientProp[],
  userBlock: UserAuthClientProp | null,
}

export const initialUserState : UserReducerProps = {
  authorizeStatus : AuthType.UNKNOWN,
  currentGenre: GenreType.ALL,
  myListFilms: [],
  userBlock: null,
};

export const UserReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setAuthorizeStatus, (state, { payload }) => {
      state.authorizeStatus = payload;
    }).addCase(setCurrentGenre, (state, { payload }) => {
      state.currentGenre = payload;
    });
});
