import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from 'components/misc/Button';
import SelectContainer from 'components/misc/SelectContainer';
import NavigationButton from 'components/misc/NavigationButton';
import Login from 'components/misc/Login';
import TextArea from 'components/misc/TextArea';

import { ReactComponent as BackArrow } from 'assets/images/arrow.svg';
import _s from 'assets/css/Application.module.scss';

import {
  submitApplication,
  selectIsSubmitDisabled,
  selectApplicationFormLoading,
  setApplicationText,
  toggleOrdered,
} from 'common/features/application';

const Application = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSubmitDisabled = useSelector(selectIsSubmitDisabled);
  const loading = useSelector(selectApplicationFormLoading);

  const dispatchSubmitApplication = dispatch(submitApplication(history));
  const dispatchSetApplicationText = dispatch(setApplicationText());
  const dispatchToggleOrdered = dispatch(toggleOrdered());

  return (
    <div className={_s.component}>
      <NavigationButton link="/">
        <BackArrow className={_s.arrow} />
        Tilbake
      </NavigationButton>
      <div className={_s.alternative}>
        <h2 className={_s.header}>Brukerinfo</h2>
        <Login />
      </div>
      <div className={classNames(_s.content, _s.selectWrapper)}>
        <h2 className={_s.header}>Velg komite(er)</h2>
        <SelectContainer
          ordered={state.ordered}
          selected={state.selectedComittees}
          onChange={selectedChanged}
          onOrderedChange={dispatchToggleOrdered}
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
          onChange={dispatchSetApplicationText}
          placeholder="Din søknadstekst..."
        />
        {state.responseMessage.length > 0 && <p>{state.responseMessage}</p>}
        <Button
          text={loading === 'pending' ? 'Sender søknad...' : 'Send søknad'}
          disabled={isSubmitDisabled}
          onClick={dispatchSubmitApplication}
        />
      </div>
    </div>
  );
};

export default Application;
