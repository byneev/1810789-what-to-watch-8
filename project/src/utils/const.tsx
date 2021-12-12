export const ID = 0;

export const FILMS_COUNT = 8;

export const TIMEOUT = 5000;

export const WTW_TOKEN_NAME = 'wtw-authorize-token';

export enum GenreType {
  ALL = 'All',
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  THRILLER = 'Thriller'
}

export enum AuthType {
  AUTH = 'Auth',
  NO_AUTH = 'No auth',
  UNKNOWN = 'Unknown',
}

export enum AppRoute {
  MAIN = '/',
  SIGN_IN = '/login',
  MY_LIST = '/mylist',
  FILMS = '/films/',
  PLAYER = '/player/',
}

export enum APIRoute {
  BASE = 'https://8.react.pages.academy/wtw',
  FILMS = '/films',
  PROMO = '/promo',
  FAVORITE = '/favorite',
  LOGIN = '/login',
  COMMENTS = '/comments',
  LOGOUT = '/logout',
}

export enum TabType {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

export const TenToOneArray:number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
