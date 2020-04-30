import React from 'react';

import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
