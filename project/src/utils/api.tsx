import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultFunctionProp } from '../types/functions-type';
import { APIRoute, HTTPCode, TIMEOUT } from './const';
import { getToken } from './token';

export const createApi = (
  error400Cb: DefaultFunctionProp,
  error404Cb: DefaultFunctionProp,
  error401Cb: DefaultFunctionProp,
):AxiosInstance => {
  const api:AxiosInstance = axios.create({
    baseURL: APIRoute.BASE,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      request.headers['X-Token'] = token;
    }
    return request;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (response: AxiosResponse) => {
      switch (response.status) {
        case HTTPCode.CLIENT_ERROR:
          error400Cb();
          break;
        case HTTPCode.NOT_FOUND:
          error404Cb();
          break;
        case HTTPCode.UNAUTHORIZED:
          error401Cb();
          break;
      }
      return Promise.reject();
    });

  return api;
};
