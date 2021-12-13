import { FilmServerProp } from '../types/film-type';
import { ThunkActionResult } from '../types/thunk-type';
import { converServerFilmToClient } from '../utils/adapter';
import { APIRoute, AuthType } from '../utils/const';
import { setToken } from '../utils/token';
import { setAuthorizeStatus, setFilms } from './actions';

export const checkAutorizeStatus = ():ThunkActionResult => async (dispatch, _getState, api) => {
  await api.get(`${APIRoute.LOGIN}`);
  dispatch(setAuthorizeStatus(AuthType.AUTH));
};

export const loginToCite = ():ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.post(`${APIRoute.LOGIN}`);
  setToken(response.data.token);
  dispatch(setAuthorizeStatus(AuthType.AUTH));
};

export const getFilms = ():ThunkActionResult => async (dispatch, _getState, api) => {
  const response = await api.get(`${APIRoute.FILMS}`);
  dispatch(setFilms(response.data.map((film : FilmServerProp) => converServerFilmToClient(film))));
};
