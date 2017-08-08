
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from "./components/App/AppContainer.jsx";
import AdminContainer from "./components/Admin/AdminContainer.jsx";
import NotFound from "./components/NotFound.jsx"

export default class Routes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount(){
    const auth = this.props.serviceProvider.getService("auth");
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
    const { serviceProvider } = this.props;
    return (
      <Router>
        <Switch>
          <Route path="/admin" render={props => <AdminContainer user={user} {...props} />} />
          <Route path="/" render={props => <AppContainer
            user={user}
            serviceProvider={serviceProvider}
            {...props}
          />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
