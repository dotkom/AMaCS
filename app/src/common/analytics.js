import ReactGA from 'react-ga'

const debug = process.env.NODE_ENV === 'development';
const trackingId = process.env.SG_GA_TRACKING_ID;

export function initializeAnalytics(history) {
  ReactGA.initialize(trackingId, {
    debug
  });
  history.listen(logPageView);
  logPageView(history.location);
}

export function logPageView(location) {
  if(trackingId) {
    ReactGA.set({ page: location.pathname + location.search });
    ReactGA.pageview(location.pathname + location.search);
  }
}
