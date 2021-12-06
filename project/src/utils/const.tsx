export const ID = 0;

export const FILMS_COUNT = 8;

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
  FILMS = '/films',
  PROMO = '/promo',
  FAVORITE = '/favorite',
  LOGIN = '/login',
  COMMENTS = '/comments',
  LOGOUT = '/logout',
}
