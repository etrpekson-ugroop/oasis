/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import API from 'apis';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { sagas } from 'resaga';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <API />
    </BrowserRouter>
  );
}

// Only one resaga saga needs to be injected (injecting more creates duplicate watchers)
const withSaga = injectSaga({ key: 'App', saga: sagas[0] });

export default compose(withSaga)(App);
