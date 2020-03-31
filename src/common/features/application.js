import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postApplication } from 'clients/application';
import { selectUser } from './auth';
import { selectApplicationPeriod } from './applicationPeriods';

export const submitApplication = createAsyncThunk('application/submit', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const applicationPeriod = selectApplicationPeriod(state);
  const { name, email, applicationText, ordered, selectedComittees } = state.application.entity;

  const applicationData = {
    name,
    email,
    application_period: applicationPeriod ? applicationPeriod.id : null,
    application_text: applicationText,
    prioritized: ordered,
    committees: selectedComittees.map((committeeId, index) => ({
      group: committeeId,
      priority: index + 1,
    })),
  };

  const response = await postApplication(applicationData);

  return response;
});

const updateSelection = (selected, committeeId, maxSelected) => {
  const selectedIndex = selected.indexOf(committeeId);
  const alreadySelected = selectedIndex !== -1;
  if (alreadySelected) {
    selected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
  } else if (selected.length < maxSelected) {
    selected = [...selected, committeeId];
  }
  return selected;
};

const INITIAL_STATE = {
  MAX_SELECTED: 3,
  loading: 'idle',
  error: null,
  entity: {
    name: '',
    email: '',
    selectedComittees: [],
    ordered: true,
    inputEnabled: false,
    applicationText: '',
    disableSubmit: false,
  },
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState: INITIAL_STATE,
  reducers: {
    setName(state, action) {
      state.entity.name = action.payload;
    },
    setEmail(state, action) {
      state.entity.email = action.payload;
    },
    setApplicationText(state, action) {
      state.entity.applicationText = action.payload;
    },
    toggleOrdered(state) {
      const { ordered, selectedComittees } = state.entity;
      state.entity.ordered = !ordered;
      state.entity.selectedComittees = !ordered ? [] : selectedComittees;
    },
    toggleInputEnabled(state) {
      state.entity.inputEnabled = !state.entity.inputEnabled;
    },
    toggleDisableSubmit(state) {
      state.entity.disableSubmit = !state.entity.disableSubmit;
    },
    toggleCommitteeById(state, action) {
      const committeeId = action.payload;
      const newSelection = updateSelection(state.entity.selectedComittees, committeeId, state.MAX_SELECTED);
      state.entity.selectedComittees = newSelection;
    },
    resetForm() {
      return INITIAL_STATE;
    },
  },
  extraReducers: {
    [submitApplication.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [submitApplication.fulfilled]: (state) => {
      if (state.loading === 'pending') {
        state.loading = 'submitted';
      }
    },
    [submitApplication.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    },
  },
});

export const {
  setName,
  setEmail,
  setApplicationText,
  toggleOrdered,
  toggleInputEnabled,
  toggleDisableSubmit,
  toggleCommitteeById,
  resetForm,
} = applicationSlice.actions;

/**
 @returns {string} 
 */
export const selectName = (state) => {
  const user = selectUser(state);
  return user ? user.name : state.application.entity.name;
};

/**
 @returns {string} 
 */
export const selectEmail = (state) => {
  const user = selectUser(state);
  return user ? user.email : state.application.entity.email;
};

/**
 @returns {string} 
 */
export const selectApplicationText = (state) => {
  return state.application.entity.applicationText;
};

/**
 @returns {number[]} 
 */
export const selectSelectedCommittees = (state) => {
  return state.application.entity.selectedComittees;
};

/**
 @returns {boolean} 
 */
export const selectIsOrdered = (state) => {
  return state.application.entity.ordered;
};

/**
 @returns {boolean} 
 */
export const selectAreInputsEnabled = (state) => {
  return state.application.entity.inputEnabled;
};

/**
 @returns {boolean} 
 */
export const selectIsInputValid = (state) => {
  const wayTooComplexEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const user = selectUser(state);
  const { name, email, selectedComittees, applicationText } = state.application.entity;

  const isNameAndEmailValid = user !== null || (name.length > 0 && wayTooComplexEmailRegex.test(email));
  const isApplicationTextValid = applicationText.length > 0;
  const isSelectedCommitteesValid = selectedComittees.length > 0;

  return isNameAndEmailValid && isApplicationTextValid && isSelectedCommitteesValid;
};

/**
 @returns {boolean} 
 */
export const selectIsSubmitDisabled = (state) => {
  const isValidInput = selectIsInputValid(state);
  return state.application.entity.disableSubmit || !isValidInput;
};

/**
 * @returns {'idle' | 'pending' | 'submitted'}
 */
export const selectApplicationFormLoading = (state) => {
  return state.application.loading;
};

export const selectApplicationFormError = (state) => {
  return state.application.error;
};

export default applicationSlice.reducer;
