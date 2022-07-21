// Internal application urls
export const getBaseUrl = () => `/`;
export const getAuthCallbackUrl = () => `${getBaseUrl()}auth`;
export const getSubmittedUrl = () => `${getBaseUrl()}thankyou`;
export const getApplicationUrl = () => `https://forms.gle/GYw5NJjd7F6yJPfq8`;

// Full redirect url the server will redirect to after authentication
export const getAuthRedirectUrl = () => `${window.location.origin}${getAuthCallbackUrl()}`;
