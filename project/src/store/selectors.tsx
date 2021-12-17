import { createSelector } from 'reselect';
import { CommentProp } from '../types/comment-type';
import { FilmClientProp } from '../types/film-type';
import { UserAuthClientProp } from '../types/user-type';
import { AuthType, GenreType, TabType } from '../utils/const';
import { NameSpace, RootProps } from './reducers/root-reducer';

export const getFilms = (state : RootProps) : FilmClientProp[] => state[NameSpace.webApp].films;

export const getCurrentReviews = (state : RootProps) : CommentProp[] => state[NameSpace.webApp].currentReviews;

export const getCurrentTab = (state : RootProps) : TabType => state[NameSpace.webApp].currentTab;

export const getCurrentFilm = (state : RootProps) : FilmClientProp | null => state[NameSpace.webApp].currentFilm;

export const getAuthorizeStatus = (state : RootProps) : AuthType => state[NameSpace.user].authorizeStatus;

export const getMyListFilms = (state : RootProps) : FilmClientProp[] => state[NameSpace.user].myListFilms;

export const getCurrentGenre = (state : RootProps) : GenreType => state[NameSpace.user].currentGenre;

export const getGenres = (state: RootProps) : GenreType[] => state[NameSpace.webApp].genres;

export const getSimilarFilms = (state: RootProps) : FilmClientProp[] => state[NameSpace.webApp].similarFilms;

export const getUserBlock = (state: RootProps) : UserAuthClientProp | null => state[NameSpace.user].userBlock;

export const getSelectorByGenre = (genre: GenreType | string):((state: RootProps) => FilmClientProp[]) => {
  if (genre === 'All') {
    return getFilms;
  }
  return createSelector(getFilms, (films : FilmClientProp[]) => films.filter((film) => film.genre === genre));
};
