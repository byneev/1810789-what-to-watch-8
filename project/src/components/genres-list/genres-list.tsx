/* eslint-disable no-console */
import { useSelector } from 'react-redux';
import { getGenres } from '../../store/selectors';
import { GenreType } from '../../utils/const';
import GenreItem from '../genre-item/genre-item';

export type GenresListProp = {
  resetDeltaHandle: () => void,
  currentGenre: GenreType,
}

function GenresList(props: GenresListProp):JSX.Element {
  const genres = useSelector(getGenres);
  console.log(genres);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenreItem key={genre} genre={genre} {...props} isActive={props.currentGenre === genre} />)}
    </ul>
  );
}

export default GenresList;
