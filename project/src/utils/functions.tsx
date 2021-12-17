/* eslint-disable no-console */
import TabDetails from '../components/tab-details/tab-details';
import TabOverview from '../components/tab-overview/tab-overview';
import TabReviews from '../components/tab-reviews/tab-reviews';
import { FilmClientProp } from '../types/film-type';
import { GenreType, TabType } from './const';

export const getTabByContext = (context: TabType):JSX.Element => {
  switch (context) {
    case TabType.DETAILS:
      return <TabDetails />;
    case TabType.OVERVIEW:
      return <TabOverview />;
    case TabType.REVIEWS:
      return <TabReviews />;
  }
};

export const getUnickGenres = (films: FilmClientProp[]):GenreType[] => {
  const result : GenreType[] = [GenreType.ALL];
  films.forEach((film) => {
    if (!result.includes(film.genre)) {
      result.push(film.genre);
    }
  });
  return result;
};

export const getGradeByRating = (rating: number) : string => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
};

