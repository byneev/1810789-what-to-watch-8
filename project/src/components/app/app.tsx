import { useSelector } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { getFilms } from '../../store/selectors';
import Main from '../main/main';
import Spinner from '../spinner/spinner';
import {history} from '../../utils/history';
import { AppRoute } from '../../utils/const';
import FilmDetails from '../film-details/film-details';

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
        <Route path={`${AppRoute.FILMS}:id`} exact>
          <FilmDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
