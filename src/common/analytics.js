import ReactGA from 'react-ga';

import { GA_TRACKING_ID } from './constants';

const debug = process.env.NODE_ENV === 'development';

export function logPageView(location) {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}

export function initializeAnalytics(history) {
  if (!GA_TRACKING_ID) {
    return;
  }
  ReactGA.initialize(GA_TRACKING_ID, {
    debug,
  });
  history.listen(logPageView);
  logPageView(history.location);
}
