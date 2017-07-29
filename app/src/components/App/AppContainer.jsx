import React, { PropTypes } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Heading from "../Heading.jsx";
import HomeContainer from "./HomeContainer.jsx"
import NotFound from "../NotFound.jsx"

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
            <Route extact path={match.path} component={HomeContainer} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default AppContainer;
