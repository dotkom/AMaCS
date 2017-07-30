import React, { PropTypes } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Heading from "../Heading.jsx";
import Home from "./Home.jsx"
import NotFound from "../NotFound.jsx"

import { RenderComponent } from 'common/utils';

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    const { match } = this.props
    return(
      <div>
        <Heading />
        <main>
          <Switch>
            <Route extact path={match.path} render={(props) => RenderComponent(Home,props,{
              user: this.props.user,
              serviceProvider: this.props.serviceProvider
            })} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppContainer;
