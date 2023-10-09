import React, { useState } from "react";
import API from "../../requester";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
import { useCookies } from "react-cookie"; // Verwende react-cookie
import { Box, TextField } from "@mui/material";

function CreateEventForm() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
  });

  const [cookies] = useCookies(["accessToken"]); // Verwende react-cookie, um auf den AccessToken-Cookie zuzugreifen

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Den AccessToken aus den Cookies abrufen
      const accessToken = cookies.accessToken || "";

      // Überprüfen, ob der Benutzer authentifiziert ist
      if (!isAuthenticated || !accessToken) {
        // Zeige eine Meldung oder blockiere den Zugriff
        console.log("Du bist nicht angemeldet.");
        return;
      }

      // Hier kannst du deine API-Anfrage mit den Headers senden, die nur title und description enthalten
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      const response = await API.post(
        "/events/",
        {
          title: eventData.title,
          description: eventData.description,
        },
        { headers }
      );

      const createdEvent = response.data; // Hier erhältst du die erstellte Veranstaltung
      console.log("Veranstaltung erstellt:", createdEvent);
    } catch (error) {
      console.error("Fehler beim Erstellen der Veranstaltung:", error);
    }
  };

  if (!isAuthenticated) {
    // Hier könntest du eine Meldung anzeigen oder den Zugriff verweigern
    return <div>Du bist nicht angemeldet.</div>;
  }

  return (
    <div>
      <h1>Event create</h1>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <TextField
            type="text"
            name="title"
            label="Title"
            value={eventData.title}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={4}
            value={eventData.description}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            type="text"
            name="img"
            label="Image Url"
            value={eventData.title}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Box>
        <button type="submit">Veranstaltung erstellen</button>
      </form>
    </div>
  );
}

export default CreateEventForm;
