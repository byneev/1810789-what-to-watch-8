import { FilmClientProp } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

export type FilmsListProp = {
  films: FilmClientProp[],
}

function FilmsList({films}: FilmsListProp):JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: FilmClientProp) => <FilmCard key={`${film.id}`} film={film} />)}
    </div>
  );
}

export default FilmsList;
