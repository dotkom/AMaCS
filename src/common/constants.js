export const OAUTH_SETTINGS = {
  authority: process.env.REACT_APP_AUTH_AUTHORITY || 'http://localhost:8000/openid/',
  client_id: process.env.REACT_APP_AUTH_CLIENT_ID || '__REPLACE_ME__',
  response_type: process.env.REACT_APP_AUTH_RESPONSE_TYPE || 'id_token token',
  redirect_uri: process.env.REACT_APP_AUTH_REDIRECT_URI || 'http://localhost:3000/auth',
  scope: process.env.REACT_APP_AUTH_SCOPE || ['openid', 'profile', 'email', 'onlineweb4'].join(' '),
  automaticSilentRenew: true,
};

export const API_SETTINGS = {
  host: process.env.REACT_APP_APPLICATION_BACKEND || 'http://localhost:8000',
  application_endpoint: process.env.REACT_APP_APPLICATION_ENDPOINT || '/api/v1/committeeapplications/',
};

export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || '__REPLACE_ME__';
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || '__REPLACE_ME__';
