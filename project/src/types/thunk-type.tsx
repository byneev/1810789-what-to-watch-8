import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootProps } from '../store/reducers/root-reducer';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootProps, AxiosInstance, Action>;
