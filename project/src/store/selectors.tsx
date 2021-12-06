import { FilmClientProp } from '../types/film-type';
import { NameSpace, RootProps } from './reducers/root-reducer';

export const getFilms = (state : RootProps) : FilmClientProp[] => state[NameSpace.webApp].films;
