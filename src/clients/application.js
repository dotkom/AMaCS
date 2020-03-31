import { API_SETTINGS } from 'common/constants';
import { http } from 'common/http';

const APPLICATIONS_URL = `${API_SETTINGS.host}${API_SETTINGS.application_endpoint}`;

export const postApplication = async (applicationData) => {
  const response = await http.post(APPLICATIONS_URL, applicationData, false);
  const data = await response.json();
  return data;
};
