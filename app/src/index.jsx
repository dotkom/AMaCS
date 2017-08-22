
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Routes from "./Routes"

import { ServiceProvider, ServiceManager, HttpServiceProvider, AuthServiceProvider, ApplicationServiceProvider } from 'services';
import { OAUTH_SETTINGS, API_SETTINGS } from 'common/constants';
import { initializeAnalytics, logPageView } from 'common/analytics';

const serviceManager = new ServiceManager();
serviceManager.registerService("http.service",HttpServiceProvider);
serviceManager.alias("http","http.service");
serviceManager.registerService("auth.service",AuthServiceProvider,OAUTH_SETTINGS);
serviceManager.alias("auth","auth.service");
serviceManager.registerService("application.service",ApplicationServiceProvider,`${API_SETTINGS.host}${API_SETTINGS.application_endpoint}`);
serviceManager.alias("application","application.service");


const history = createBrowserHistory();
initializeAnalytics(history);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ServiceProvider serviceManager={serviceManager}>
        <Router history={history}>
          <Component />
        </Router>
      </ServiceProvider>
    </AppContainer>,
    document.getElementById("app")
  );
}


render(Routes);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    render(Routes);
  });
}
