
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader'

import Routes from "./Routes.jsx"

import { ServiceManager, HttpServiceProvider, AuthServiceProvider } from 'services';
import { OAUTH_SETTINGS } from 'common/constants';

const serviceManager = new ServiceManager();
serviceManager.registerService("http.service",HttpServiceProvider);
serviceManager.alias("http","http.service");
serviceManager.registerService("auth.service",AuthServiceProvider,OAUTH_SETTINGS);
serviceManager.alias("auth","auth.service");

const render = Component => {
  ReactDOM.render(
    <AppContainer>
       <Component serviceProvider={serviceManager} />
    </AppContainer>,
    document.getElementById("app")
  );
}


render(Routes);

if (module.hot) {
  module.hot.accept('./Routes.jsx', () => {
    render(Routes);
  });
}
