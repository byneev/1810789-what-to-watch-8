import { useSelector } from 'react-redux';
import { getFilms } from '../../store/selectors';
import { ID } from '../../utils/const';

function TabOverview(): JSX.Element {
  const films = useSelector(getFilms);
  const film = films[0];
  let id = ID;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film.description.split('.').map((sentense) => <p key={++id}>{sentense}</p>)}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.slice(4).join(', ')}</strong></p>
      </div>
    </>
  );
}

export default TabOverview;
