import React, { PropTypes } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Application from "./Application"
import AuthenticationEndpoint from "../AuthenticationEndpoint"
import Heading from "../Heading";
import Home from "./Home"
import NotFound from "../NotFound"
import Thankyou from './Thankyou';
import _s from 'assets/css/base.css';

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
            <Route exact path={'/thankyou'} component={Thankyou} />
            <Route exact path={'/auth'} component={AuthenticationEndpoint} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <div className={_s.footer}>
          <p>Dersom du opplever problemer eller finner feil, ta kontakt med <a href="mailto:dotkom@online.ntnu.no">dotkom@online.ntnu.no</a>.</p>
          <p>Får du ikke sendt inn søknaden, eller vil du heller bruke e-post? Send søknaden din til <a href="mailto:opptak@online.ntnu.no">opptak@online.ntnu.no</a>.</p>
        </div>
      </div>
    );
  }
}

export default AppContainer;
