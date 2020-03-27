import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getOnlineGroupById } from 'clients/onlineGroup';

export const fetchOnlineGroupsByIds = createAsyncThunk('onlineGroups/fetchById', async (groupIds) => {
  const results = await Promise.all(groupIds.map((id) => getOnlineGroupById(id)));
  return results;
});

const onlineGroupsAdapter = createEntityAdapter();

export const onlineGroupsSlice = createSlice({
  name: 'onlineGroups',
  initialState: onlineGroupsAdapter.getInitialState({
    loading: 'idle',
    error: null,
    entities: [],
  }),
  reducers: {
    onlineGroupsLoaded: onlineGroupsAdapter.setAll,
    onlineGroupDeleted: onlineGroupsAdapter.removeOne,
  },
  extraReducers: {
    [fetchOnlineGroupsByIds.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchOnlineGroupsByIds.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        onlineGroupsAdapter.addMany(state, action.payload);
      }
    },
    [fetchOnlineGroupsByIds.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const { onlineGroupsLoaded, onlineGroupDeleted } = onlineGroupsSlice.actions;

export const selectOnlineGroupById = (id) => (state) => {
  const groups = state.onlineGroups.entities.filter(Boolean);
  return groups.find((group) => group.id === id);
};

export const selectOnlineGroupsByIds = (ids) => (state) => {
  return state.onlineGroups.entities
    .filter(Boolean)
    .filter((group) => ids.some((id) => group.id === id))
    .sort((groupA, groupB) => groupB.name_long.localeCompare(groupA.name_long));
};

export default onlineGroupsSlice.reducer;
