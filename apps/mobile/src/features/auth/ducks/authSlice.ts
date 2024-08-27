import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  loggedIn: boolean;
};

const initialState: AuthState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
