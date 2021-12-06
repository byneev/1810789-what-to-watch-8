import { combineReducers } from '@reduxjs/toolkit';
import { AppReducer } from './app-reducer';
import { UserReducer } from './user-reducer';

export enum NameSpace {
  webApp = 'WebApp',
  user = 'User',
}

export const RootReducer = combineReducers({
  [NameSpace.webApp] : AppReducer,
  [NameSpace.user] : UserReducer,
});

export type RootProps = ReturnType<typeof RootReducer>;
