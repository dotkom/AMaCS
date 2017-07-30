
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from "./components/App/AppContainer.jsx";
import AdminContainer from "./components/Admin/AdminContainer.jsx";
import NotFound from "./components/NotFound.jsx"

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={AppContainer} />
          <Route path="/admin" component={AdminContainer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}