import { CommentProp } from '../types/comment-type';
import { FilmClientProp } from '../types/film-type';
import { AuthType, TabType } from '../utils/const';
import { NameSpace, RootProps } from './reducers/root-reducer';

export const getFilms = (state : RootProps) : FilmClientProp[] => state[NameSpace.webApp].films;

export const getCurrentReviews = (state : RootProps) : CommentProp[] => state[NameSpace.webApp].currentReviews;

export const getCurrentTab = (state : RootProps) : TabType => state[NameSpace.webApp].currentTab;

export const getCurrentFilm = (state : RootProps) : FilmClientProp | null => state[NameSpace.webApp].currentFilm;

export const getAuthorizeStatus = (state : RootProps) : AuthType => state[NameSpace.user].authorizeStatus;

export const getMyListFilms = (state : RootProps) : FilmClientProp[] => state[NameSpace.user].myListFilms;
