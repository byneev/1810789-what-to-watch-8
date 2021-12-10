import { createReducer } from '@reduxjs/toolkit';
import { FilmClientProp } from '../../types/film-type';
import { AuthType } from '../../utils/const';
import { setAuthorizeStatus } from '../actions';

export type UserReducerProps = {
  authorizeStatus: AuthType,
  myListFilms: FilmClientProp[],
}

export const initialUserState : UserReducerProps = {
  authorizeStatus : AuthType.UNKNOWN,
  myListFilms: [],
};

export const UserReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setAuthorizeStatus, (state, { payload }) => {
      state.authorizeStatus = payload;
    });
});
