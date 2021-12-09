/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilms } from '../../store/selectors';
import { FilmClientProp } from '../../types/film-type';
import { FILMS_COUNT } from '../../utils/const';
import FilmPreview from '../film-preview/film-preview';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import Logo from '../logo/logo';
import MoreButton from '../more-button/more-button';

function Main():JSX.Element {
  const films = useSelector(getFilms);
  const [currentFilms, setCurrentFilms] = useState<FilmClientProp[]>(films.slice(0, FILMS_COUNT));

  return (
    <React.Fragment>
      <FilmPreview />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <FilmsList films={currentFilms} />
          <MoreButton />
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

