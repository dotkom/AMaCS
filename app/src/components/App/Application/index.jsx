import React, { Component } from 'react';
import _ from 'lodash';

import Button from '../../Button';
import committeesMap from 'common/committees';
import SelectContainer from '../SelectContainer';
import NavigationButton from '../../NavigationButton';
import Login from '../../Login';
import TextArea from '../../TextArea';

import _s from 'assets/css/Application.css';

class Application extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : "",
      selectedComittees: [],
      ordered: true,
      inputEnabled: false,
      applicationText: '',
      disableSubmit: false,
      responseMessage: '',
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      name: props.user ? props.user.fullname : "",
      email: props.user ? props.user.email : ""
    });
  }

  _infoChanged(info){
    this.setState(_.pick(info,["name","email","inputEnabled"]));
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

  async submitApplication() {
    const { name, email,
      applicationText: application_text,
      ordered: prioritized,
      selectedComittees: committees,
    } = this.state;
    const application = {
      name, email, prioritized, application_text,
      committees: committees.map((committee, index) => Object.assign({
        group: committeesMap.get(committee).id,
        priority: index + 1,
      })),
    };

    const uri = `${process.env.SG_APPLICATION_BACKEND}${process.env.SG_APPLICATION_ENDPOINT}`;
    this.setState({ disableSubmit: true });

    const headers = {
      'Content-Type': 'application/json'
    }
    if (this.props.user && this.props.user._access_token.length > 0) {
      headers.Authorization = `Bearer ${this.props.user._access_token}`;
      application.name = '';
      application.email = '';
    }

    try {
      const resp = await fetch(uri, {
        headers,
        body: JSON.stringify(application),
        method: 'POST',
      });

      const json = await resp.json();

      if (resp.status === 201) {
        this.setState({
          responseMessage: 'Søknad er sendt.',
        });
        return;
      }

      // Sometimes we get an array of messages and sometimes we get
      // an object. If we get an array we can concat it together,
      // if we get an object we show a more generic error message.
      const errorMessage = json instanceof Array ? json : 'Pass på at du har fylt ut alle feltene og valgt komiteer å søke.';

      this.setState({
        disableSubmit: false,
        responseMessage: `Noe gikk galt. ${errorMessage}`
      });

    } catch (err) {
      console.error("Error response", err)
      this.setState({
        disableSubmit: false,
        responseMessage: `Noe gikk galt. ${err}`
      });
    }
  }

  render() {
    return (
      <div className={_s.component}>
        <div>
          <NavigationButton link="/">
            <img src="/static/arrow-blue.png" />
            Tilbake
          </NavigationButton>
        </div>
        <div className={_s.alternative}>
          <h2 className={_s.header}>Brukerinfo</h2>
          <Login
            onChange={(info) => this._infoChanged(info)}
            loggedIn={!!this.props.user}
            info={_.pick(this.state,["name","email","inputEnabled"])}
          />
        </div>
        <div className={_s.content}>
          <SelectContainer
            ordered={this.state.ordered}
            selected={this.state.selectedComittees}
            onChange={(selected) => this._selectedChanged(selected) }
            onOrderedChange={(ordered) => this._setOrdered(ordered)}
          />
        </div>
        <div className={_s.alternative}>
          <h2 className={_s.header}>Søknadstekst</h2>
          <TextArea
            value={this.state.applicationText}
            onChange={(text) => this.setState({ applicationText: text })}
            placeholder="Din søknadstekst..."
          />
        </div>
        <div className={_s.alternative}>
            { this.state.responseMessage.length > 0 && <p>{this.state.responseMessage}</p> }
              <Button
                text={"Send søknad"}
                disabled={this.state.disableSubmit}
                onClick={() => this.submitApplication()}
                />
        </div>
      </div>
    );
  }
}

Application.defaultProps = {
  user: null
}

export default Application;
