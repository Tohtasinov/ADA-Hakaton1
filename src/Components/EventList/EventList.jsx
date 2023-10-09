import React, { useEffect, useState } from "react";
import API from "../../requester";
import EventCard from "../EventCard/EventCard";
import element1 from "../../assets/element1.svg";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await API.get("events/");
        setEvents(response.data.results);
        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Error!!!");
      }
    };

    fetchEvents();
  }, []);

  const cardStyle = {
    width: "calc(25% - 16px)",
    margin: "8px",
  };

  const rowWrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-8px",
    marginRight: "-8px",
  };

  const titleStyle = {
    marginBottom: "16px",
  };

  const errorStyle = {
    color: "red",
    marginBottom: "16px",
  };

  return (
    <div>
      <img
        src={element1}
        alt="element"
        width="1440px"
        style={{ padding: "0" }}
      />
      <h1 style={titleStyle}>Event List</h1>
      {error && <div style={errorStyle}>{error}</div>}
      <div style={rowWrapperStyle}>
        {Array.isArray(events) &&
          events.map((event) => (
            <div key={event.id} style={cardStyle}>
              <EventCard event={event} />
            </div>
          ))}
      </div>
      <img
        src={element1}
        alt="element"
        width="1440px"
        style={{ padding: "0" }}
      />
    </div>
  );
};

export default EventList;
