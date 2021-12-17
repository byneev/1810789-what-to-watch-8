import { useSelector } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { getFilms } from '../../store/selectors';
import Main from '../main/main';
import Spinner from '../spinner/spinner';
import {history} from '../../utils/history';
import { AppRoute } from '../../utils/const';
import FilmDetails from '../film-details/film-details';
import MyList from '../my-list/my-list';
import Login from '../login/login';

function App(): JSX.Element {
  const films = useSelector(getFilms);
  if (films.length === 0) {
    return <Spinner />;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main />
        </Route>
        <Route path={`${AppRoute.FILMS}:id`} component={FilmDetails} exact />
        <Route path={AppRoute.MY_LIST} exact>
          <MyList />
        </Route>
        <Route path={AppRoute.SIGN_IN} exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
