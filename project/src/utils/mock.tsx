import { CommentPostProp, CommentProp } from '../types/comment-type';
import { FilmClientProp, FilmServerProp } from '../types/fim-type';
import { GenreType, ID } from './const';
import faker from  'faker';
import { UserAuthClientProp, UserAuthServerProp, UserLoginProp } from '../types/user-type';

export const getMockNames = ():string[] => {
  const names : string[] = [];
  for (let index = 0; index < 7; index++) {
    names.push(faker.name.findName());
  }
  return names;
};

export const getMockServerFilm = ():FilmServerProp => ({
  'id': 1,
  'name': 'The Grand Budapest Hotel',
  'poster_image': 'img/the-grand-budapest-hotel-poster.jpg',
  'preview_image': 'img/the-grand-budapest-hotel.jpg',
  'background_image': 'img/the-grand-budapest-hotel-bg.jpg',
  'background_color': '#ffffff',
  'video_link': 'https://some-link',
  'preview_video_link': 'https://some-link',
  'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  'rating': 8.9,
  'scores_count': 240,
  'director': 'Wes Anderson',
  'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  'run_time': 99,
  'genre': GenreType.COMEDY,
  'released': 2014,
  'is_favorite': false,
});

export const getMockClientFilm = ():FilmClientProp => ({
  'id': 1,
  'name': 'The Grand Budapest Hotel',
  'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
  'previewImage': 'img/the-grand-budapest-hotel.jpg',
  'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
  'backgroundColor': '#ffffff',
  'videoLink': 'https://some-link',
  'previewVideoLink': 'https://some-link',
  'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  'rating': 8.9,
  'scoresCount': 240,
  'director': 'Wes Anderson',
  'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  'runTime': 99,
  'genre': GenreType.COMEDY,
  'released': 2014,
  'isFavorite': false,
});

export const getMockClientFilms = ():FilmClientProp[] => {
  let id = ID;
  return Object.keys(GenreType).map((genre) => Object.assign({}, getMockClientFilm(), {
    genre: genre,
    id: ++id,
  }));
};

export const getMockServerFilms = ():FilmServerProp[] => {
  let id = ID;
  return Object.keys(GenreType).map((genre) => Object.assign({}, getMockServerFilm(), {
    genre: genre,
    id: ++id,
  }));
};


export const getMockComment = ():CommentProp => ({
  'id': 1,
  'user': {
    'id': 4,
    'name': 'Kate Muir',
  },
  'rating': 8.9,
  'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
  'date': '2019-05-08T14:13:56.569Z',
});

export const getMockComments = ():CommentProp[] => {
  let id = ID;
  return getMockNames().map((name) => Object.assign({}, getMockComment(), {
    name: name,
    id: ++id,
  }));
};

export const getMockCommentPost = ():CommentPostProp => ({
  'rating': 8,
  'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
});

export const getMockUserLogin = ():UserLoginProp => ({
  'email': 'Oliver.conner@gmail.com',
  'password': '12345678',
});

export const getMockServerUserAuth = ():UserAuthServerProp => ({
  'id': 1,
  'email': 'Oliver.conner@gmail.com',
  'name': 'Oliver.conner',
  'avatar_url': 'img/1.png',
  'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
});

export const getMockClientUserAuth = ():UserAuthClientProp => ({
  'id': 1,
  'email': 'Oliver.conner@gmail.com',
  'name': 'Oliver.conner',
  'avatarUrl': 'img/1.png',
  'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
});
