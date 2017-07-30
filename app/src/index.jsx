
import React from "react";
import { render } from "react-dom";

import Routes from "./Routes.jsx"

//Setting up services
import { ServiceManager, HttpServiceProvider, AuthServiceProvider } from 'services';

import { OAUTH_SETTINGS } from 'common/constants';

import { AppContainer } from 'components/App/AppContainer.jsx';



const serviceManager = new ServiceManager();
serviceManager.registerService("http.service",HttpServiceProvider);
serviceManager.alias("http","http.service");
serviceManager.registerService("auth.service",AuthServiceProvider,OAUTH_SETTINGS);
serviceManager.alias("auth","auth.service");




const serviceManager = new ServiceManager();
serviceManager.registerService("http.service",HttpServiceProvider);
serviceManager.alias("http","http.service");
serviceManager.registerService("auth.service",AuthServiceProvider,OAUTH_SETTINGS);
serviceManager.alias("auth","auth.service");

class Root extends React.Component{
  render() {
    return (
      <Routes serviceProvider={serviceManager} />
    );
  }
}


render(
  <Root />,
  document.getElementById("app")
);