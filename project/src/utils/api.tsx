import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultFunctionProp } from '../types/functions-type';
import { APIRoute, TIMEOUT } from './const';
import { getToken } from './token';

export const createApi = (error400Cb: DefaultFunctionProp, error404Cb: DefaultFunctionProp):AxiosInstance => {
  const api:AxiosInstance = axios.create({
    baseURL: APIRoute.BASE,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((request: AxiosRequestConfig) => {
    request.headers['X-auth-token'] = getToken();
    return request;
  });

  api.interceptors.response.use((response: AxiosResponse) => {
    if (response.statusText === '400') {
      error400Cb();
    }
    if (response.statusText === '404') {
      error404Cb();
    }
    return response;
  });

  return api;
};
