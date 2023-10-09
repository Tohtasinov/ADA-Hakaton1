// store.js

import { configureStore } from "@reduxjs/toolkit";
import isAuthentificatedReducer from "./isAuthentificatedSlice";

export const store = configureStore({
  reducer: {
    auth: isAuthentificatedReducer,
    // We can add more reducers here if needed
  },
});
