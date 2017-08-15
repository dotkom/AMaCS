import React, { Component } from 'react';
import _ from 'lodash';

import SelectContainer from '../SelectContainer';
import NavigationButton from '../../NavigationButton';
import Login from '../../Login';

import committees from 'common/committees';
import _s from 'assets/css/Application.css';

class Application extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : "",
      selectedComittees: [],
      ordered: true
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : ""
    });
  }

  _infoChanged(info){
    this.setState(_.pick(info,["name","email"]));
  }

  _selectedChanged(selected){
    this.setState({
      selectedComittees: selected.slice(0,3)
    });
  }

  _setOrdered(ordered){
    this.setState({
      ordered: ordered,
      selectedComittees: ordered ? [] : this.state.selectedComittees
    });
  }

  render() {
    return (
      <div>
        <div className={_s.nav}>
          <NavigationButton link="/info">
            <img src="/static/arrow-blue.png" />
            Tilbake
          </NavigationButton>
        </div>
        <div className={_s.alternative}>
          <div className={_s.content}>
            <Login
              onChange={(info) => this._infoChanged(info)}
              loggedIn={!!this.props.user}
              info={_.pick(this.state,["name","email"])}
            />
          </div>
        </div>
        <div className={_s.main}>
          <div className={_s.content}>
            <SelectContainer
              ordered={this.state.ordered}
              selected={this.state.selectedComittees}
              onChange={(selected) => this._selectedChanged(selected) }
              committees={committees}
            />
          </div>
        </div>
      </div>
    );
  }
}

Application.defaultProps = {
  user: null
}

export default Application;
