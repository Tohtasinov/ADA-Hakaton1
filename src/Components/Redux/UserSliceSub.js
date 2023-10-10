import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../requester";

// Async Thunk für das Abonnieren eines Benutzers
export const subscribeUser = createAsyncThunk(
  "user/subscribe",
  async (userId, { dispatch }) => {
    try {
      await API.post(`/user/${userId}/subscribe/`);
      // Nach erfolgreichem Abonnement die Benutzerdaten erneut abrufen und im Store aktualisieren
      dispatch(fetchUser(userId));
    } catch (error) {
      console.error("Fehler beim Abonnieren des Benutzers: ", error);
      throw error;
    }
  }
);

// Async Thunk für das Deabonnieren eines Benutzers
export const unsubscribeUser = createAsyncThunk(
  "user/unsubscribe",
  async (userId, { dispatch }) => {
    try {
      await API.post(`/user/${userId}/unsubscribe/`);
      // Nach erfolgreichem Deabonnement die Benutzerdaten erneut abrufen und im Store aktualisieren
      dispatch(fetchUser(userId));
    } catch (error) {
      console.error("Fehler beim Deabonnieren des Benutzers: ", error);
      throw error;
    }
  }
);

// Async Thunk für das Abrufen von Benutzerdaten
export const fetchUser = createAsyncThunk("user/fetch", async (userId) => {
  try {
    const response = await API.get(`/user/${userId}/`);
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Benutzerdaten: ", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: null, // Initialer Zustand ist null, wenn kein Benutzer geladen ist
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        // Benutzerdaten aktualisieren, wenn die Abfrage erfolgreich ist
        return action.payload;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        // Benutzerdaten aktualisieren, wenn das Abonnieren erfolgreich ist
        return action.payload;
      })
      .addCase(unsubscribeUser.fulfilled, (state, action) => {
        // Benutzerdaten aktualisieren, wenn das Deabonnieren erfolgreich ist
        return action.payload;
      });
  },
});

export default userSlice.reducer;
