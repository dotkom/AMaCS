import React, { PropTypes } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Application from "./Application"
import Heading from "../Heading";
import Home from "./Home"
import NotFound from "../NotFound"
import 'assets/css/base.css';

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    const { match, user } = this.props
    return(
      <div>
        <Heading />
        <main>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={`/application`} render={props =>
              <Application
                user={user}
                {...props}
              />
            } />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppContainer;
