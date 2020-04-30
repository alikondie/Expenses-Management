import React from 'react';
import ReactDOM from 'react-dom';
import App, { store } from './App';
import * as serviceWorker from './serviceWorker';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage/LoadingPage';
import './firebase/firebase-db';
import { firebase } from './firebase/firebase-auth';

import { history } from './routers/AppRouter';
import './global.css';

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <div>
    <LoadingPage />
  </div>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // store.dispatch
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      console.log('fetched with success');
    });
    renderApp();
    if (history.location.pathname === '/') history.push('/dashboard');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
