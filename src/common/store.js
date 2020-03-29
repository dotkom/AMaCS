import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import applicationPeriodReducer from './features/applicationPeriods';
import onlineGroupsReducer from './features/onlineGroup';

const createStore = (preloadedState = null) => {
  return configureStore({
    preloadedState: preloadedState,
    reducer: {
      auth: authReducer,
      applicationPeriods: applicationPeriodReducer,
      onlineGroups: onlineGroupsReducer,
    },
  });
};

export default createStore;
