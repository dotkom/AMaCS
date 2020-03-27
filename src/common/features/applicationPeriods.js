import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getApplicationPeriods } from 'clients/applicationPeriod';

export const fetchApplicationPeriods = createAsyncThunk('applicationPeriods/fetch', async () => {
  const data = await getApplicationPeriods();
  return data.results;
});

const applicationPeriodsAdapter = createEntityAdapter();

export const applicationPeriodsSlice = createSlice({
  name: 'applicationPeriods',
  initialState: applicationPeriodsAdapter.getInitialState({
    loading: 'idle',
    error: null,
    entities: [],
  }),
  reducers: {
    applicationPeriodsLoaded: applicationPeriodsAdapter.setAll,
    applicationPeriodDeleted: applicationPeriodsAdapter.removeOne,
  },
  extraReducers: {
    [fetchApplicationPeriods.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchApplicationPeriods.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        applicationPeriodsAdapter.addMany(state, action.payload);
      }
    },
    [fetchApplicationPeriods.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const { applicationPeriodDeleted, applicationPeriodsLoaded } = applicationPeriodsSlice.actions;

export const selectCurrentApplicationPeriod = (state) => {
  const entities = state.applicationPeriods.entities.filter(Boolean);
  return entities.find((period) => period.accepting_applications);
};

export const selectLatestApplicationPeriod = (state) => {
  const entities = state.applicationPeriods.entities.filter(Boolean);
  const [latestPeriod] = entities.sort((periodA, periodB) => Date.parse(periodB.start) - Date.parse(periodA.start));
  return latestPeriod;
};

export const selectCurrentOrLatestApplicationPeriod = (state) => {
  let period = selectCurrentApplicationPeriod(state);
  if (!period) {
    period = selectLatestApplicationPeriod(state);
  }
  return period;
};

export const selectCurrentOrLatestOnlineGroups = (state) => {
  const period = selectCurrentOrLatestApplicationPeriod(state);
  return period ? period.committees : [];
};

export default applicationPeriodsSlice.reducer;
