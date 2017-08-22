import Raven from 'raven-js';

const sentryUrl = process.env.SG_SENTRY_URL;

export function initializeErrorReporting() {
  if(sentryUrl) {
    Raven.config(sentryUrl).install();
    console.log('Started sentry');
  }
}
