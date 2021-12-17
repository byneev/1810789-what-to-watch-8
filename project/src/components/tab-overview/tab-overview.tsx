import { useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/selectors';
import { ID } from '../../utils/const';
import { getGradeByRating } from '../../utils/functions';
import Spinner from '../spinner/spinner';

function TabOverview(): JSX.Element {
  let id = ID;
  const film = useSelector(getCurrentFilm);

  if (!film) {
    return <Spinner />;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getGradeByRating(film.rating)}</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.description.split('.').map((sentense) => <p key={++id}>{sentense}</p>)}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.slice(0, 4).join(', ')}</strong></p>
      </div>
    </>
  );
}

export default TabOverview;
