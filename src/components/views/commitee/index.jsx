import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Application from 'components/views/commitee/Application';
import AuthenticationEndpoint from 'components/views/AuthenticationEndpoint';
import Home from 'components/views/commitee/Home';
import NotFound from 'components/views/NotFound';
import Thankyou from 'components/views/Thankyou';
import { getApplicationUrl, getBaseUrl, getSubmittedUrl, getAuthCallbackUrl } from 'common/urls';
import { selectDataLoadingState } from 'common/selectors/selectAppLoadingState';
import FullPageSpinner from 'components/misc/FullPageSpinner';

export const MainView = () => {
  const loadingState = useSelector(selectDataLoadingState);

  if (loadingState === 'pending') {
    return <FullPageSpinner />;
  }

  if (loadingState === 'missing') {
    return <NotFound />;
  }

  return (
    <Switch>
      <Route exact path={getBaseUrl()} component={Home} />
      <Route exact path={getApplicationUrl()} component={Application} />
      <Route exact path={getSubmittedUrl()} component={Thankyou} />
      <Route exact path={getAuthCallbackUrl()} component={AuthenticationEndpoint} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default MainView;
