import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import _s from 'assets/css/Thankyou.module.scss';
import { selectName, selectEmail, selectApplicationFormLoading } from 'common/features/application';
import { getBaseUrl } from 'common/urls';

const ThankYou = () => {
  const loading = useSelector(selectApplicationFormLoading);
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  if (loading !== 'submitted') {
    return <Redirect to={getBaseUrl()} />;
  }

  return (
    <div className={_s.container}>
      <h1>Takk for søknaden, {name}!</h1>
      <p className={_s.text}>
        Søknadene vil bli behandlet fortløpende og du vil bli innkalt til intervju på e-postadressen du oppga ({email}).
      </p>
    </div>
  );
};

export default ThankYou;
