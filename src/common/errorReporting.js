import Raven from 'raven-js';

import { SENTRY_DSN } from './constants';

export function initializeErrorReporting() {
  if (SENTRY_DSN) {
    Raven.config(SENTRY_DSN).install();
    console.log('Started sentry');
  }
}
