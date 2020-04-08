import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import AppRouter from './routers/AppRouter';
import { setTextFilter } from './actions/filters';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

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

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
