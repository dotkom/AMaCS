import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from 'components/misc/Button';
import SelectContainer from 'components/misc/SelectContainer';
import NavigationButton from 'components/misc/NavigationButton';
import Login from 'components/misc/Login';
import TextArea from 'components/misc/TextArea';

import { ReactComponent as BackArrow } from 'assets/images/arrow.svg';
import _s from 'assets/css/Application.module.scss';

import { getSubmittedUrl } from 'common/urls';
import { selectApplicationPeriod } from 'common/features/applicationPeriods';
import { postApplication } from 'clients/application';
import { selectUser } from 'common/features/auth';

const Application = () => {
  const history = useHistory();
  const user = useSelector(selectUser, shallowEqual);
  const applicationPeriod = useSelector(selectApplicationPeriod, shallowEqual);

  const [state, _setState] = useState({
    name: user ? user.profile.name : '',
    email: user ? user.profile.email : '',
    selectedComittees: [],
    ordered: true,
    inputEnabled: false,
    applicationText: '',
    disableSubmit: false,
    responseMessage: '',
  });

  // name and email from logged in user should overwrite local state when present.
  const name = user ? user.profile.name : state.name;
  const email = user ? user.profile.email : state.email;

  // Adapt class component like setState for hooks
  const setState = (newState) => _setState((oldState) => ({ ...oldState, ...newState }));

  const infoChanged = (info) => {
    const { name, email, inputEnabled } = info;
    setState({ name, email, inputEnabled });
  };

  const selectedChanged = (selected) => {
    setState({
      selectedComittees: selected.slice(0, 3),
    });
  };

  const isValidInput = () => {
    const { name, email, selectedComittees, applicationText } = state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      (user !== null || (name.length > 0 && re.test(email))) &&
      applicationText.length > 0 &&
      selectedComittees.length > 0
    );
  };
  const toggleOrdered = () => {
    const { ordered, selectedComittees } = state;
    setState({
      ordered: !ordered,
      selectedComittees: !ordered ? [] : selectedComittees,
    });
  };

  const submitApplication = async () => {
    const { name, email, applicationText, ordered, selectedComittees } = state;

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
      history.push(getSubmittedUrl());
    } catch (err) {
      // Error, something went wrong
      const errorMessage =
        err instanceof Array ? err : 'Pass på at du har fylt ut alle feltene og valgt komiteer å søke.';
      setState({
        disableSubmit: false,
        responseMessage: `Noe gikk galt. ${errorMessage}`,
      });
    }
  };

  const { inputEnabled } = state;
  return (
    <div className={_s.component}>
      <NavigationButton link="/">
        <BackArrow className={_s.arrow} />
        Tilbake
      </NavigationButton>
      <div className={_s.alternative}>
        <h2 className={_s.header}>Brukerinfo</h2>
        <Login onChange={infoChanged} info={{ name, email, inputEnabled }} />
      </div>
      <div className={classNames(_s.content, _s.selectWrapper)}>
        <h2 className={_s.header}>Velg komite(er)</h2>
        <SelectContainer
          ordered={state.ordered}
          selected={state.selectedComittees}
          onChange={selectedChanged}
          onOrderedChange={toggleOrdered}
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
          value={state.applicationText}
          onChange={(text) => setState({ applicationText: text })}
          placeholder="Din søknadstekst..."
        />
        {state.responseMessage.length > 0 && <p>{state.responseMessage}</p>}
        <Button
          text={state.disableSubmit ? 'Sender søknad...' : 'Send søknad'}
          disabled={state.disableSubmit || !isValidInput()}
          onClick={submitApplication}
        />
      </div>
    </div>
  );
};

export default Application;
