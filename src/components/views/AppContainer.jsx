import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Heading from 'components/misc/Heading';
import MainView from 'components/views/commitee';

import { Link } from '@dotkomonline/design-system';
import _s from 'assets/css/base.module.scss';
import { selectOnlineGroupIds, fetchApplicationPeriods } from 'common/features/applicationPeriods';
import { fetchOnlineGroupsByIds } from 'common/features/onlineGroup';

const AppContainer = () => {
  const dispatch = useDispatch();
  const committees = useSelector(selectOnlineGroupIds, shallowEqual);

  useEffect(() => {
    dispatch(fetchApplicationPeriods());
  }, [dispatch]);

  useEffect(() => {
    if (committees) {
      dispatch(fetchOnlineGroupsByIds(committees));
    }
  }, [dispatch, committees]);

  return (
    <div>
      <Heading />
      <main>
        <Switch>
          <Route exact path={getBaseUrl()} component={Home} />
          <Route exact path={getApplicationUrl()} render={(props) => <Application user={user} {...props} />} />
          <Route exact path={getSubmittedUrl()} component={Thankyou} />
          <Route exact path={getAuthCallbackUrl()} component={AuthenticationEndpoint} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <div className={_s.footer}>
        <p>
          Dersom du opplever problemer eller finner feil, ta kontakt med{' '}
          <Link href="mailto:dotkom@online.ntnu.no">dotkom@online.ntnu.no</Link>.
        </p>
        <p>
          Får du ikke sendt inn søknaden, eller vil du heller bruke e-post? Send søknaden din til{' '}
          <Link href="mailto:opptak@online.ntnu.no">opptak@online.ntnu.no</Link>.
        </p>
      </div>
    </div>
  );
};

export default AppContainer;
