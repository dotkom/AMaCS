export const OAUTH_SETTINGS = {
  authority: process.env.REACT_APP_AUTH_AUTHORITY,
  client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
  response_type: process.env.REACT_APP_AUTH_RESPONSE_TYPE,
  redirect_uri: process.env.REACT_APP_AUTH_REDIRECT_URI,
  scope: process.env.REACT_APP_AUTH_SCOPE,
  automaticSilentRenew: true
};

export const API_SETTINGS = {
  host: process.env.REACT_APP_APPLICATION_BACKEND,
  application_endpoint: process.env.REACT_APP_APPLICATION_ENDPOINT
};
