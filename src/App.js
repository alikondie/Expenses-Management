import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase-db';
import { firebase } from './firebase/firebase-auth';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
const store = configureStore();
/*
store.dispatch(
  addExpense({ description: 'Water bill', amount: 45, createAt: 1000 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 450, createAt: 1005 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 480, createAt: 1001 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);
*/
const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // store.dispatch
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      console.log('fetched with success');
    });
    if (history.location.pathname === '/') history.push('/dashboard');
  } else {
    store.dispatch(logout());
    history.push('/');
  }
});

console.log(store);

export default App;
