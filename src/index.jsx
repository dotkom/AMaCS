import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Oidc from 'oidc-client';

import Routes from './Routes';

import {
  ServiceProvider,
  ServiceManager,
  HttpServiceProvider,
  AuthServiceProvider,
  ApplicationServiceProvider,
} from 'services';
import { OAUTH_SETTINGS, API_SETTINGS } from 'common/constants';
import { initializeAnalytics } from 'common/analytics';
import { initializeErrorReporting } from 'common/errorReporting';

initializeErrorReporting();

const serviceManager = new ServiceManager();
serviceManager.registerService('http.service', HttpServiceProvider);
serviceManager.alias('http', 'http.service');
serviceManager.registerService('auth.service', AuthServiceProvider, OAUTH_SETTINGS);
serviceManager.alias('auth', 'auth.service');
serviceManager.registerService(
  'application.service',
  ApplicationServiceProvider,
  `${API_SETTINGS.host}${API_SETTINGS.application_endpoint}`
);
serviceManager.alias('application', 'application.service');

const history = createBrowserHistory();
initializeAnalytics(history);

history.listen(() => {
  window.scrollTo(0, 0);
});

if (process.env.NODE_ENV.toLowerCase() === 'production') Oidc.Log.reset(); // Turn off Oidc vendor logging to browser console in production.

const render = (Component) => {
  ReactDOM.render(
    <ServiceProvider serviceManager={serviceManager}>
      <Router history={history}>
        <Component />
      </Router>
    </ServiceProvider>,
    document.getElementById('root')
  );
};

render(Routes);
