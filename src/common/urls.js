// Internal application urls
export const getBaseUrl = () => `/`;
export const getAuthCallbackUrl = () => `${getBaseUrl()}auth`;
export const getSubmittedUrl = () => `${getBaseUrl()}thankyou`;
export const getApplicationUrl = () => `${getBaseUrl()}application`;

// Full redirect url the server will redirect to after authentication
export const getAuthRedirectUrl = () => `${window.location.origin}${getAuthCallbackUrl()}`;
