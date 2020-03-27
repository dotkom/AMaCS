import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(state, action);
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state) => {
  return state.auth.user;
};

export const selectIsLoggedIn = (state) => {
  return Boolean(selectUser(state));
};

export default authSlice.reducer;
