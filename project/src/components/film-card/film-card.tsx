/* eslint-disable no-console */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentTab } from '../../store/actions';
import { FilmClientProp } from '../../types/film-type';
import { AppRoute, TabType } from '../../utils/const';

export type FilmCardProp = {
  film: FilmClientProp,
}

function FilmCard({film}:FilmCardProp): JSX.Element {
  const { id, previewImage, name } = film;
  const dispatch = useDispatch();

  const filmTitleClickHandle = () => {
    dispatch(setCurrentTab(TabType.OVERVIEW));
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={filmTitleClickHandle} className="small-film-card__link" to={`${AppRoute.FILMS}${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
