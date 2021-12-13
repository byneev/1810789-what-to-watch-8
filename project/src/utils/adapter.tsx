import { FilmClientProp, FilmServerProp } from '../types/film-type';
import { UserAuthClientProp, UserAuthServerProp } from '../types/user-type';

export const convertServerUserAuthToClient = (userAuth: UserAuthServerProp) : UserAuthClientProp => {
  if (!userAuth.avatar_url) {
    throw Error('Data error');
  }
  const userAuthClient = {...userAuth, avatarUrl: userAuth.avatar_url};
  delete userAuthClient.avatar_url;
  return userAuthClient;
};

export const converServerFilmToClient = (film: FilmServerProp) : FilmClientProp => {
  if (!film.poster_image ||
    !film.preview_image ||
    !film.background_image ||
    !film.background_color ||
    !film.video_link ||
    !film.preview_video_link ||
    !film.scores_count ||
    !film.run_time ||
    !film.is_favorite) {
    throw Error('Data error');
  }

  const filmClient = {
    ...film,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    isFavorite: film.is_favorite,
  };

  delete filmClient.poster_image;
  delete filmClient.preview_image;
  delete filmClient.background_image;
  delete filmClient.background_color;
  delete filmClient.video_link;
  delete filmClient.preview_video_link;
  delete filmClient.scores_count;
  delete filmClient.run_time;
  delete filmClient.is_favorite;

  return filmClient;
};
