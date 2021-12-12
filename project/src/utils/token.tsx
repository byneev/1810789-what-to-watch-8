import { WTW_TOKEN_NAME } from './const';

export const setToken = (token: string):void => {
  localStorage.setItem(WTW_TOKEN_NAME, token);
};

export const getToken = ():string | null => {
  const token = localStorage.getItem(WTW_TOKEN_NAME);
  if (token) {
    return token;
  }
  return null;
};

export const removeToken = ():void => {
  localStorage.removeItem(WTW_TOKEN_NAME);
};
