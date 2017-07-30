
import React from "react";
import { render } from "react-dom";


//Setting up services
import { ServiceManager, HttpServiceProvider, AuthServiceProvider } from 'services';

import { OAUTH_SETTINGS } from 'common/constants';




const serviceManager = new ServiceManager();
serviceManager.registerService("http.service",HttpServiceProvider);
serviceManager.alias("http","http.service");
serviceManager.registerService("auth.service",AuthServiceProvider,OAUTH_SETTINGS);
serviceManager.alias("auth","auth.service");


function App(){
  return (
    <h1>Initial setup</h1>
  );
}


class Root extends React.Component{
  render() {
    return (
      <App/>
    );
  }
}


render(
  <Root />,
  document.getElementById("app")
);