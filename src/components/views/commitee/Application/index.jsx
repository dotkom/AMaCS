import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  submitApplication,
  selectIsSubmitDisabled,
  selectApplicationFormLoading,
  setApplicationText,
  selectApplicationFormError,
  selectApplicationText,
} from 'common/features/application';
import { getSubmittedUrl, getBaseUrl } from 'common/urls';
import Button from 'components/misc/Button';
import SelectContainer from 'components/misc/SelectContainer';
import NavigationButton from 'components/misc/NavigationButton';
import Login from 'components/misc/Login';
import TextArea from 'components/misc/TextArea';

import { ReactComponent as BackArrow } from 'assets/images/arrow.svg';
import _s from 'assets/css/Application.module.scss';

const Application = () => {
  const dispatch = useDispatch();
  const isSubmitDisabled = useSelector(selectIsSubmitDisabled);
  const loading = useSelector(selectApplicationFormLoading);
  const error = useSelector(selectApplicationFormError, shallowEqual);
  const applicationText = useSelector(selectApplicationText);

  const dispatchSubmitApplication = () => dispatch(submitApplication());
  const dispatchSetApplicationText = (text) => dispatch(setApplicationText(text));

  if (loading === 'submitted') {
    return <Redirect to={getSubmittedUrl()} />;
  }

  return (
    <div className={_s.component}>
      <NavigationButton link={getBaseUrl()}>
        <BackArrow className={_s.arrow} />
        Tilbake
      </NavigationButton>
      <div className={_s.alternative}>
        <h2 className={_s.header}>Brukerinfo</h2>
        <Login />
      </div>
      <div className={classNames(_s.content, _s.selectWrapper)}>
        <h2 className={_s.header}>Velg komite(er)</h2>
        <SelectContainer />
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
        <TextArea value={applicationText} onChange={dispatchSetApplicationText} placeholder="Din søknadstekst..." />
        {error && <p>{error}</p>}
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
