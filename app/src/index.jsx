
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



class App extends React.Component{
  constructor(props){
    super(props);
    this.auth = serviceManager.getService("auth");
    this.state = {loggedIn: false}
  }
  componentDidMount(){
    this.auth.onUserChange().subscribe((user) => {
      console.log("New user",!!user);
      this.setState({
        loggedIn: !!user
      });
    });
  }

  login(){
    this.auth.login();
  }
  
  logout(){
    this.auth.logout();
  }

  render(){
    const loggedIn = this.state.loggedIn;
    return (
      <div>
        <h1>Initial setup</h1>
        {
          loggedIn ? <button onClick={() => this.logout()}>Logout</button> :
          <button onClick={() => this.login()}>Login</button> 
        }
      </div>
    );
  }
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