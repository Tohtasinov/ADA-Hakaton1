// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

// Zentralisierte Funktion zum Rufen eines Benutzers basierend auf seinem Benutzernamen
export const fetchUserByUsername = (event) => async (dispatch) => {
  try {
    const response = await API.get(`/user/by-username/${event.user.user}`);
    const userData = response.data;
    dispatch(setUser(userData)); // Benutzen Sie den dispatch, um setUser aufzurufen
  } catch (error) {
    console.log("Error fetching user by username:", error);
  }
};

export default userSlice.reducer;
