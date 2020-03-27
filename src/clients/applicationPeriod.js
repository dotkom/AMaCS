import { API_SETTINGS } from 'common/constants';

const APPLICATION_PERIOD_URL = `${API_SETTINGS.host}${API_SETTINGS.application_period_endpoint}`;

export const getApplicationPeriods = async () => {
  const response = await fetch(APPLICATION_PERIOD_URL, { method: 'GET' });
  const data = await response.json();
  return data;
};
