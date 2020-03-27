import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import applicationPeriodReducer from './features/applicationPeriods';
import onlineGroupsReducer from './features/onlineGroup';

export default configureStore({
  reducer: {
    auth: authReducer,
    applicationPeriods: applicationPeriodReducer,
    onlineGroups: onlineGroupsReducer,
  },
});
