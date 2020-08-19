import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getOnlineGroupById } from 'clients/onlineGroup';

export const fetchOnlineGroupsByRelations = createAsyncThunk('onlineGroups/fetchById', async (groupRelations) => {
  return await Promise.all(
    groupRelations.map(async (g) => {
      return {
        open_for_applications: g.open_for_applications,
        ...(await getOnlineGroupById(g.id)),
      };
    })
  );
});

const onlineGroupsAdapter = createEntityAdapter();

export const onlineGroupsSlice = createSlice({
  name: 'onlineGroups',
  initialState: onlineGroupsAdapter.getInitialState({
    loading: 'idle',
    error: null,
    entities: [],
  }),
  reducers: {},
  extraReducers: {
    [fetchOnlineGroupsByRelations.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchOnlineGroupsByRelations.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        onlineGroupsAdapter.addMany(state, action.payload);
      }
    },
    [fetchOnlineGroupsByRelations.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const selectOnlineGroupById = (id) => (state) => {
  const groups = state.onlineGroups.entities.filter(Boolean);
  return groups.find((group) => group.id === id);
};

export const selectOnlineGroupsByRelations = (committees) => (state) => {
  return state.onlineGroups.entities
    .filter(Boolean)
    .filter((group) => committees.some((c) => group.id === c.id))
    .sort((groupA, groupB) => groupA.name_long.localeCompare(groupB.name_long));
};

export const selectOnlineGroupsLoading = (state) => {
  return state.onlineGroups.loading;
};

export default onlineGroupsSlice.reducer;
