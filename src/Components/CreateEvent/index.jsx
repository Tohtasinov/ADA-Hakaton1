import React, { useState } from "react";
import API from "../../requester";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
import Cookies from "js-cookie";

function CreateEventForm() {
  const accessToken = Cookies.get("accessToken").replace("Bearer ", "");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    location: {
      // Ort-Daten
      city: "",
      country: "",
    },
    can_subscribe: "open", // Standardwert für "can_subscribe"
    is_free: false, // Standardwert auf false setzen
    tags: [], // Ein leeres Array für Tags
    img: "", // Bild-URL
    start_event_date: "", // Leerer String für das Startdatum
    end_event_date: "", // Leerer String für das Enddatum
    limit_of_followers: null, // null für "limit_of_followers"
  });
  const isAuthenticated = useSelector(selectIsAuthenticated);

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
      const response = await API.post("/events/", eventData, { headers });
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
      <h1>Veranstaltung erstellen</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Beschreibung:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Stadt:
          <input
            type="text"
            name="location.city"
            value={eventData.location.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Land:
          <input
            type="text"
            name="location.country"
            value={eventData.location.country}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Kann abonniert werden:
          <select
            name="can_subscribe"
            value={eventData.can_subscribe}
            onChange={handleInputChange}
          >
            <option value="open">Ja</option>
            <option value="closed">Nein</option>
            <option value="restricted">Beschränkt</option>
          </select>
        </label>
        <br />
        <label>
          Kostenlos:
          <input
            type="checkbox"
            name="is_free"
            checked={eventData.is_free}
            onChange={(e) =>
              setEventData({ ...eventData, is_free: e.target.checked })
            }
          />
        </label>
        <br />
        <label>
          Tags (durch Kommas getrennt):
          <input
            type="text"
            name="tags"
            value={eventData.tags.join(", ")}
            onChange={(e) =>
              setEventData({ ...eventData, tags: e.target.value.split(", ") })
            }
          />
        </label>
        <br />
        <label>
          Bild-URL:
          <input
            type="text"
            name="img"
            value={eventData.img}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Startdatum:
          <input
            type="date"
            name="start_event_date"
            value={eventData.start_event_date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Enddatum:
          <input
            type="date"
            name="end_event_date"
            value={eventData.end_event_date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Maximale Anzahl von Followern:
          <input
            type="number"
            name="limit_of_followers"
            value={eventData.limit_of_followers}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Veranstaltung erstellen</button>
      </form>
    </div>
  );
}

export default CreateEventForm;
