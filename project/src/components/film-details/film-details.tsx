/* eslint-disable no-console */
import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { setCurrentTab } from '../../store/actions';
import { getCommentsByFilm, getFilmById,  getSimilarFilmsFromServer } from '../../store/api-actions';
import { getCurrentFilm, getCurrentTab, getSimilarFilms } from '../../store/selectors';
import { TabType } from '../../utils/const';
import { getTabByContext } from '../../utils/functions';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Spinner from '../spinner/spinner';
import UserBlock from '../user-block/user-block';

export type FilmDetailsProp = {
  id: string,
}
function FilmDetails(props: RouteComponentProps<FilmDetailsProp>):JSX.Element {
  const id = props.match.params.id;

  const tab = useSelector(getCurrentTab);
  const dispatch = useDispatch();
  const film = useSelector(getCurrentFilm);
  const films = useSelector(getSimilarFilms);

  useEffect(() => {
    dispatch(getFilmById(+id));
    dispatch(getSimilarFilmsFromServer(+id));
    dispatch(getCommentsByFilm(+id));
  }, [id]);

  const tabClickHandle = (evt: SyntheticEvent<EventTarget>) => {
    evt.preventDefault();
    if (!(evt.target instanceof HTMLAnchorElement)) {
      return;
    }
    const tabName = evt.target.dataset.value as TabType;
    if (tabName) {
      dispatch(setCurrentTab(tabName));
    }
  };

  if (!film || films.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a onClick={tabClickHandle} data-value={TabType.OVERVIEW} href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a onClick={tabClickHandle} data-value={TabType.DETAILS} href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a onClick={tabClickHandle} data-value={TabType.REVIEWS} href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              {getTabByContext(tab)}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films.slice(0, 4)} />
        </section>
        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>© 2021 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmDetails;

