import React, { PropTypes } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Heading from "../Heading.jsx";
import Home from "./Home.jsx"
import NotFound from "../NotFound.jsx"
import 'assets/css/base.css';

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
    const { match, user, serviceProvider } = this.props
    return(
      <div>
        <Heading />
        <main>
          <Switch>
            <Route extact path={match.path} render={props =>
              <Home
                user={user}
                serviceProvider={serviceProvider}
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
