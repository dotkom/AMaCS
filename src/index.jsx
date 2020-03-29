import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Oidc from 'oidc-client';

import Routes from './Routes';

import createStore from 'common/store';
import { initializeAnalytics } from 'common/analytics';
import { initializeErrorReporting } from 'common/errorReporting';

initializeErrorReporting();

const history = createBrowserHistory();
initializeAnalytics(history);

history.listen(() => {
  window.scrollTo(0, 0);
});

if (process.env.NODE_ENV.toLowerCase() === 'production') Oidc.Log.reset(); // Turn off Oidc vendor logging to browser console in production.

const render = (Component) => {
  const store = createStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(Routes);
