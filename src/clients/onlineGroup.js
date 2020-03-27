import { API_SETTINGS } from 'common/constants';

const ONLINE_GROUP_URL = `${API_SETTINGS.host}${API_SETTINGS.online_groups_endpoint}`;

export const getOnlineGroupById = async (id) => {
  const response = await fetch(`${ONLINE_GROUP_URL}${id}/`, { method: 'GET' });
  const data = await response.json();
  return data;
};
