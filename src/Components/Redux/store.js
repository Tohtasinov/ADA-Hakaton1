// store.js

import { configureStore } from "@reduxjs/toolkit";
import isAuthentificatedReducer from "./isAuthentificatedSlice";
import userReducer from "./UserSlice";
import snackbarReducer from "./SnackBarReducer";

export const store = configureStore({
  reducer: {
    auth: isAuthentificatedReducer,
    user: userReducer,
    snackbar: snackbarReducer,
    // We can add more reducers here if needed
  },
});
