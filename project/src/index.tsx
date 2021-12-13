import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router-dom';
import App from './components/app/app';
import { setAuthorizeStatus, setFilms } from './store/actions';
import { RootReducer } from './store/reducers/root-reducer';
import { createApi } from './utils/api';
import { getMockClientFilms } from './utils/mock';
import { ToastContainer, toast } from 'react-toastify';
import { AppRoute, AuthType } from './utils/const';
import { checkAutorizeStatus } from './store/api-actions';

const api = createApi(
  () => toast('Something goes wrong', {
    autoClose: 3000,
    closeOnClick: true,
  }),
  () => <Redirect to={AppRoute.NOT_FOUND} />,
  () => store.dispatch(setAuthorizeStatus(AuthType.NO_AUTH)),
);

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(checkAutorizeStatus());
store.dispatch(setFilms(getMockClientFilms()));

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('root'));
