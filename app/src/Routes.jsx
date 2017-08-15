
import React from "react";
import { Route, Switch } from 'react-router-dom';

import AppContainer from "./components/App/AppContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import NotFound from "./components/NotFound"

import { connectServices } from 'services';

export class Routes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount(){
    const { auth } = this.props;
    this.userSub = auth.onUserChange().subscribe((user) => {
      this.setState({
        user: user
      });
    });
  }

  componentWillUnmount(){
    if(this.userSub)
      this.userSub.unsubscribe();
  }
  
  render() {
    const { user } = this.state;
    return (
      <Switch>
        <Route path="/admin" render={props => <AdminContainer user={user} {...props} />} />
        <Route path="/" render={props => <AppContainer
          user={user}
          {...props}
        />} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

const mapServicesToProps = (serviceManager) => ({
  auth: serviceManager.getService("auth")
})

export default connectServices(mapServicesToProps)(Routes);
