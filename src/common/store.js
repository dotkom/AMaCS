import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import applicationReducer from './features/application';
import applicationPeriodReducer from './features/applicationPeriods';
import onlineGroupsReducer from './features/onlineGroup';

export default configureStore({
  reducer: {
    auth: authReducer,
    application: applicationReducer,
    applicationPeriods: applicationPeriodReducer,
    onlineGroups: onlineGroupsReducer,
  },
});
