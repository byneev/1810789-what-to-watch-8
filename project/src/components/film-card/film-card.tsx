/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { FilmClientProp } from '../../types/film-type';
import { AppRoute } from '../../utils/const';

export type FilmCardProp = {
  film: FilmClientProp,
}

function FilmCard({film}:FilmCardProp): JSX.Element {
  const { id, previewImage, name } = film;
  console.log(previewImage);
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FILMS}${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
