import { UserManager } from 'oidc-client';

import { OAUTH_SETTINGS } from 'common/constants';
import { getAuthRedirectUrl } from 'common/urls';

const settings = {
  ...OAUTH_SETTINGS,
  popupWindowFeatures: 'location=no,toolbar=no,width=900,height=700,left=100,top=100',
  redirect_uri: getAuthRedirectUrl(),
};

const USER_MANAGER = new UserManager(settings);

export const login = async () => {
  return await USER_MANAGER.signinPopup();
};

export const loginCallback = async () => {
  return await USER_MANAGER.signinPopupCallback();
};

export const logout = async () => {
  await sessionStorage.clear();
  return await USER_MANAGER.signoutPopup();
};

export const getUser = async () => {
  return await USER_MANAGER.getUser();
};

export const authEvents = USER_MANAGER.events;
