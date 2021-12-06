import { createReducer } from '@reduxjs/toolkit';
import { AuthType } from '../../utils/const';
import { setAuthorizeStatus } from '../actions';

export type UserReducerProps = {
  authorizeStatus: AuthType,
}

export const initialUserState : UserReducerProps = {
  authorizeStatus : AuthType.UNKNOWN,
};

export const UserReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setAuthorizeStatus, (state, { payload }) => {
      state.authorizeStatus = payload;
    });
});
