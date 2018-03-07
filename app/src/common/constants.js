export const OAUTH_SETTINGS = {
  authority: process.env.SG_AUTH_AUTHORITY,
  client_id: process.env.SG_AUTH_CLIENT_ID,
  response_type: process.env.SG_AUTH_RESPONSE_TYPE,
  redirect_uri: process.env.SG_AUTH_REDIRECT_URI,
  scope: process.env.SG_AUTH_SCOPE,
}

export const API_SETTINGS = {
  host: process.env.SG_APPLICATION_BACKEND,
  application_endpoint: process.env.SG_APPLICATION_ENDPOINT
} 