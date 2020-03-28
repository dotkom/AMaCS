import {
  selectApplicationPeriodLoading,
  selectApplicationPeriod,
  selectOnlineGroupIds,
} from 'common/features/applicationPeriods';
import { selectOnlineGroupsLoading, selectOnlineGroupsByIds } from 'common/features/onlineGroup';

export const selectDataLoadingState = (state) => {
  const applicationPeriodLoading = selectApplicationPeriodLoading(state);
  const onlineGroupsLoading = selectOnlineGroupsLoading(state);
  const isAppRequesting = applicationPeriodLoading === 'pending' || onlineGroupsLoading === 'pending';

  const applicationPeriod = selectApplicationPeriod(state);
  const onlineGroupIds = selectOnlineGroupIds(state);
  const onlineGroups = selectOnlineGroupsByIds(onlineGroupIds)(state);
  const isDataLoaded = applicationPeriod !== null && onlineGroups.length !== 0;

  if (isDataLoaded) {
    return 'done';
  } else if (!isDataLoaded && isAppRequesting) {
    return 'pending';
  } else {
    return 'missing';
  }
};
