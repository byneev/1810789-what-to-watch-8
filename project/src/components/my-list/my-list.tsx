import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setMyListFilms } from '../../store/actions';
import { getAuthorizeStatus, getFilms, getMyListFilms } from '../../store/selectors';
import { AppRoute, AuthType } from '../../utils/const';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function MyList():JSX.Element {
  const authStatus = useSelector(getAuthorizeStatus);
  const films = useSelector(getFilms);
  const myListFilms = useSelector(getMyListFilms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMyListFilms(films));
  });

  if (authStatus !== AuthType.AUTH) {
    return <Redirect to={AppRoute.MAIN}/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={myListFilms} />
      </section>

      <footer className="page-footer">
        <Logo />
        <div className="copyright">
          <p>© 2021 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
