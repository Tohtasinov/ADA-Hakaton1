// isAuthenticatedSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const isAuthenticatedSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    clearAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthenticated, clearAuthenticated } =
  isAuthenticatedSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default isAuthenticatedSlice.reducer;
