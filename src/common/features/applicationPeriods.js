import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAvailableApplicationPeriod } from 'clients/applicationPeriod';

export const fetchApplicationPeriods = createAsyncThunk('applicationPeriods/fetch', async () => {
  const data = await getAvailableApplicationPeriod();
  return data;
});

export const applicationPeriodsSlice = createSlice({
  name: 'applicationPeriods',
  initialState: {
    loading: 'idle',
    error: null,
    entity: null,
  },
  reducers: {},
  extraReducers: {
    [fetchApplicationPeriods.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchApplicationPeriods.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.entity = action.payload;
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

export const { setApplicationPeriod } = applicationPeriodsSlice.actions;

export const selectApplicationPeriod = (state) => {
  return state.applicationPeriods.entity;
};

export const selectOnlineGroups = (state) => {
  const applicationPeriod = selectApplicationPeriod(state);
  return applicationPeriod ? applicationPeriod.committees : [];
};

export const selectApplicationPeriodLoading = (state) => {
  return state.applicationPeriods.loading;
};

export default applicationPeriodsSlice.reducer;
