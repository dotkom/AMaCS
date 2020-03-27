import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AppContainer from 'components/views/AppContainer';
import NotFound from 'components/views/NotFound';

import { getBaseUrl } from 'common/urls';
import { authEvents, loginCallback } from 'common/auth';
import { setUser } from 'common/features/auth';

export const Routes = () => {
  const dispatch = useDispatch();

  const dispatchUser = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ expired, expires_in, ...user }) => {
      dispatch(setUser(user));
    },
    [dispatch]
  );

  useEffect(() => {
    authEvents.addUserLoaded(dispatchUser);
    return () => {
      authEvents.removeUserLoaded(dispatchUser);
    };
  }, [dispatchUser]);

  useEffect(() => {
    loginCallback();
  }, []);

  return (
    <Switch>
      <Route path={getBaseUrl()} render={(props) => <AppContainer {...props} />} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
