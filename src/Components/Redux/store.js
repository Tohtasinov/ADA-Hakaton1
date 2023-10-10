// store.js

import { configureStore } from "@reduxjs/toolkit";
import isAuthentificatedReducer from "./isAuthentificatedSlice";
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    auth: isAuthentificatedReducer,
    user: userReducer,
    // We can add more reducers here if needed
  },
});
