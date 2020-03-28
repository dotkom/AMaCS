import { API_SETTINGS } from 'common/constants';
import { http } from 'common/http';

const APPLICATION_PERIOD_URL = `${API_SETTINGS.host}${API_SETTINGS.application_period_endpoint}`;

/**
 * Get the application period which is currently accepting applications.
 * There can only be one period with this attribute, as the back-end devalidates overlapping periods.
 */
export const getCurrentApplicationPeriod = async () => {
  const response = await http.get(APPLICATION_PERIOD_URL, { accepting_applications: 'True', page_size: 1 });
  const { results } = await response.json();
  const [currentApplicationPeriod] = results;
  return currentApplicationPeriod;
};

/**
 * Get the application period which started/starts at the latest time.
 */
export const getLatestApplicationPeriod = async () => {
  const response = await http.get(APPLICATION_PERIOD_URL, { ordering: '-start', page_size: 1 });
  const { results } = await response.json();
  const [latestApplicationPeriod] = results;
  return latestApplicationPeriod;
};

/**
 * Get the application period which should be displayed at this moment in time.
 * If there is one that accepts applications it will be shown, else the one starting at
 * the latest time will be shown.
 */
export const getAvailableApplicationPeriod = async () => {
  // Execute both requests at the same time. So we don't have to wait for the current
  // to resolve before requesting the latest if the current does not exist.
  const current = getCurrentApplicationPeriod();
  const latest = getLatestApplicationPeriod();

  await current;
  if (current) {
    return current;
  }

  await latest;
  if (latest) {
    return latest;
  }

  return null;
};
