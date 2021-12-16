/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentGenre, getSelectorByGenre } from '../../store/selectors';
import FilmPreview from '../film-preview/film-preview';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import Logo from '../logo/logo';
import MoreButton from '../more-button/more-button';

function Main():JSX.Element {
  const currentGenre = useSelector(getCurrentGenre);
  const films = useSelector(getSelectorByGenre(currentGenre));
  const [delta, setDelta] = useState(8);
  const currentFilms = films.slice(0, delta);
  const isHideButton = films.length <= delta;

  const moreButtonClickHandle = (evt : MouseEvent) => {
    evt.preventDefault();
    setDelta((prevDelta) => prevDelta + 8);
  };

  const resetDeltaHandle = () => {
    setDelta(8);
  };

  return (
    <React.Fragment>
      <FilmPreview />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList currentGenre={currentGenre} resetDeltaHandle={resetDeltaHandle} />
          <FilmsList films={currentFilms} />
          {!isHideButton && <MoreButton onButtonClick={moreButtonClickHandle} />}
        </section>

        <footer className="page-footer">
          <Logo />

          <div className="copyright">
            <p>© 2021 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Main;

