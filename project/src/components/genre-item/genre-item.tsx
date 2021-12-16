/* eslint-disable no-console */
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentGenre } from '../../store/actions';
import { DefaultFunctionProp } from '../../types/functions-type';
import { GenreType } from '../../utils/const';

export type GenreItemProp = {
  genre: GenreType,
  resetDeltaHandle: DefaultFunctionProp,
  isActive: boolean,
}

function GenreItem({genre, resetDeltaHandle, isActive} : GenreItemProp): JSX.Element {
  const dispatch = useDispatch();

  const genreItemClickHandle = (evt: MouseEvent):void => {
    evt.preventDefault();
    dispatch(setCurrentGenre(genre));
    resetDeltaHandle();
  };

  return (
    <li className={['catalog__genres-item', isActive && 'catalog__genres-item--active'].join(' ')}>
      <a href='/' onClick={genreItemClickHandle} className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreItem;
