import Raven from "raven-js";

const sentryUrl = process.env.REACT_APP_SENTRY_URL;

export function initializeErrorReporting() {
  if (sentryUrl) {
    Raven.config(sentryUrl).install();
    console.log("Started sentry");
  }
}
