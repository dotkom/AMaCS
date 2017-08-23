import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom'

import Button from '../../Button';
import SelectContainer from '../SelectContainer';
import NavigationButton from '../../NavigationButton';
import Login from '../../Login';
import TextArea from '../../TextArea';

import blueArrow from 'assets/images/arrow-blue.png';
import _s from 'assets/css/Application.css';

import { CommitteeApplication, connectServices } from 'services';

export class Application extends Component {
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

  _toggleOrdered() {
    const { ordered, selectedComittees} = this.state;
    this.setState({
      ordered: !ordered,
      selectedComittees: !ordered ? [] : selectedComittees
    });
  }

  submitApplication() {
    const { name, email,
      applicationText,
      ordered,
      selectedComittees,
    } = this.state;
    
    const application = new CommitteeApplication({
      name: name,
      email: email,
      application_text: applicationText,
      prioritized: ordered,
      committees: selectedComittees
    });
    
    this.setState({ disableSubmit: true });
    this.props.applicationService.postApplication(application).subscribe(() => {
      //Everything went ok
      this.props.history.push('/thankyou');
    },(err) => {
      // Error, something went wrong
      const errorMessage = err instanceof Array ? err : 'Pass på at du har fylt ut alle feltene og valgt komiteer å søke.';
      this.setState({
        disableSubmit: false,
        responseMessage: `Noe gikk galt. ${errorMessage}`
      });
    });

  }

  render() {
    return (
      <div className={_s.component}>
        <NavigationButton link="/">
          <img src={blueArrow} alt="Pil" />
          Tilbake
        </NavigationButton>
        <div className={_s.alternative}>
          <h2 className={_s.header}>Brukerinfo</h2>
          <Login
            onChange={(info) => this._infoChanged(info)}
            loggedIn={!!this.props.user}
            info={_.pick(this.state,["name","email","inputEnabled"])}
          />
        </div>
        <div className={classNames(_s.content, _s.selectWrapper)}>
          <h2 className={_s.header}>Velg komite(er)</h2>
          <SelectContainer
            ordered={this.state.ordered}
            selected={this.state.selectedComittees}
            onChange={(selected) => this._selectedChanged(selected) }
            onOrderedChange={() => this._toggleOrdered()}
          />
        </div>
        <div className={classNames(_s.alternative, _s.application)}>
          <h2 className={_s.header}>Søknadstekst</h2>
          <p>
            Send inn din søknad hvor du forteller litt om deg selv, din motivasjon for vervet, og eventuelt tidligere erfaring fra lignende arbeid.
            Hold gjerne søknaden kort ettersom at vi arrangerer et intervju med hver søker så vi kan bli enda bedre kjent med deg.
          </p>
          <TextArea
            value={this.state.applicationText}
            onChange={(text) => this.setState({ applicationText: text })}
            placeholder="Din søknadstekst..."
          />
          { this.state.responseMessage.length > 0 && <p>{this.state.responseMessage}</p> }
            <Button
              text={this.state.disableSubmit ? "Sender søknad..." : "Send søknad"}
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

const mapServicesToProps = (serviceManager) => ({
  applicationService: serviceManager.getService("application")
})

export default withRouter(connectServices(mapServicesToProps)(Application));
