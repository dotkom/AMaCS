import ReactGA from 'react-ga';

const debug = process.env.NODE_ENV === 'development';
const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

export function logPageView(location) {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}

export function initializeAnalytics(history) {
  if (!trackingId) {
    return;
  }
  ReactGA.initialize(trackingId, {
    debug,
  });
  history.listen(logPageView);
  logPageView(history.location);
}
