import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

import Button from 'components/misc/Button';
import SelectContainer from 'components/misc/SelectContainer';
import NavigationButton from 'components/misc/NavigationButton';
import Login from 'components/misc/Login';
import TextArea from 'components/misc/TextArea';

import { ReactComponent as BackArrow } from 'assets/images/arrow.svg';
import _s from 'assets/css/Application.module.scss';

import { getSubmittedUrl } from 'common/urls';
import { connect } from 'react-redux';
import { selectCurrentApplicationPeriod } from 'common/features/applicationPeriods';
import { postApplication } from 'clients/application';
import { selectUser } from 'common/features/auth';

export class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user ? props.user.profile.name : '',
      email: props.user ? props.user.profile.email : '',
      selectedComittees: [],
      ordered: true,
      inputEnabled: false,
      applicationText: '',
      disableSubmit: false,
      responseMessage: '',
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      name: props.user ? props.user.profile.name : '',
      email: props.user ? props.user.profile.email : '',
    });
  }

  _infoChanged(info) {
    const { name, email, inputEnabled } = info;
    this.setState({ name, email, inputEnabled });
  }

  _selectedChanged(selected) {
    this.setState({
      selectedComittees: selected.slice(0, 3),
    });
  }
  _isValidInput() {
    const { name, email, selectedComittees, applicationText } = this.state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      (this.props.user != null || (name.length > 0 && re.test(email))) &&
      applicationText.length > 0 &&
      selectedComittees.length > 0
    );
  }
  _toggleOrdered() {
    const { ordered, selectedComittees } = this.state;
    this.setState({
      ordered: !ordered,
      selectedComittees: !ordered ? [] : selectedComittees,
    });
  }

  async submitApplication() {
    const { name, email, applicationText, ordered, selectedComittees } = this.state;
    const { applicationPeriod } = this.props;

    const applicationData = {
      name,
      email,
      application_period: applicationPeriod ? applicationPeriod.id : null,
      application_text: applicationText,
      prioritized: ordered,
      committees: selectedComittees.map((committeeId, index) => ({
        group: committeeId,
        priority: index + 1,
      })),
    };

    try {
      await postApplication(applicationData);
      this.props.history.push(getSubmittedUrl());
    } catch (err) {
      // Error, something went wrong
      const errorMessage =
        err instanceof Array ? err : 'Pass på at du har fylt ut alle feltene og valgt komiteer å søke.';
      this.setState({
        disableSubmit: false,
        responseMessage: `Noe gikk galt. ${errorMessage}`,
      });
    }
  }

  render() {
    const { name, email, inputEnabled } = this.state;
    return (
      <div className={_s.component}>
        <NavigationButton link="/">
          <BackArrow className={_s.arrow} />
          Tilbake
        </NavigationButton>
        <div className={_s.alternative}>
          <h2 className={_s.header}>Brukerinfo</h2>
          <Login onChange={(info) => this._infoChanged(info)} info={{ name, email, inputEnabled }} />
        </div>
        <div className={classNames(_s.content, _s.selectWrapper)}>
          <h2 className={_s.header}>Velg komite(er)</h2>
          <SelectContainer
            ordered={this.state.ordered}
            selected={this.state.selectedComittees}
            onChange={(selected) => this._selectedChanged(selected)}
            onOrderedChange={() => this._toggleOrdered()}
          />
        </div>
        <div className={classNames(_s.alternative, _s.application)}>
          <h2 className={_s.header}>Søknadstekst</h2>
          <p>
            Send inn din søknad hvor du forteller litt om deg selv, din motivasjon for vervet, og eventuelt tidligere
            erfaring fra lignende arbeid. Hold gjerne søknaden kort ettersom at vi arrangerer et intervju med hver søker
            så vi kan bli enda bedre kjent med deg.
          </p>
          <p>
            <em>
              Vi vil særlig vite om du er interessert i et tilleggsverv i bankom. Gjerne nevn dette i søknaden dersom
              dette er aktuelt for deg.
            </em>
          </p>
          <TextArea
            value={this.state.applicationText}
            onChange={(text) => this.setState({ applicationText: text })}
            placeholder="Din søknadstekst..."
          />
          {this.state.responseMessage.length > 0 && <p>{this.state.responseMessage}</p>}
          <Button
            text={this.state.disableSubmit ? 'Sender søknad...' : 'Send søknad'}
            disabled={this.state.disableSubmit || !this._isValidInput()}
            onClick={() => this.submitApplication()}
          />
        </div>
      </div>
    );
  }
}

Application.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  applicationPeriod: selectCurrentApplicationPeriod(state),
  user: selectUser(state),
});

export default withRouter(connect(mapStateToProps)(Application));
