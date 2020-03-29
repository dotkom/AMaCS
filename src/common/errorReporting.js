import * as Sentry from '@sentry/browser';

import { SENTRY_DSN } from './constants';

export function initializeErrorReporting() {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
    });
    console.log('Started sentry');
  }
}
