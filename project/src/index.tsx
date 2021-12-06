import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { setFilms } from './store/actions';
import { RootReducer } from './store/reducers/root-reducer';
import { getMockClientFilms } from './utils/mock';

const api = axios.create(); // create api

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(setFilms(getMockClientFilms()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
