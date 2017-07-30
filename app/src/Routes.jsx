
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from "./components/App/AppContainer.jsx";
import AdminContainer from "./components/Admin/AdminContainer.jsx";
import NotFound from "./components/NotFound.jsx"

import { RenderComponent } from 'common/utils';

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
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => RenderComponent(AppContainer,props,{
            user: this.state.user,
            serviceProvider: this.props.serviceProvider
          })} />
          <Route path="/admin" render={(props) => RenderComponent(AdminContainer,props,{user: user})} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}