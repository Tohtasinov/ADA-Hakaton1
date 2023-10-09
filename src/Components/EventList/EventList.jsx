import React, { useEffect, useState } from "react";
import API from "../../requester";
import EventCard from "../EventCard/EventCard";
import element1 from "../../assets/element1.svg";
import Hashtags from "../Hashtags";
import { Box, Typography } from "@mui/material";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        transform: "translateY(-90px)",
        maxWidth: "90%",
        background: "#F0F0F0",
        paddingLeft: "60px",
        paddingRight: "60px",
        paddingTop: "24px",
        paddingBottom: "24px",
        borderRadius: "16px",
        margin: "0 auto",
      }}
    >
      {/* <Hashtags /> */}
      {/* <img
        src={element1}
        alt="element"
        width="1440px"
        style={{ padding: "0" }}
      /> */}
      <Typography sx={{ mb: "16px", color: "black" }} variant="h4">
        Events
      </Typography>
      {error && <div style={errorStyle}>{error}</div>}
      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "24px" }}>
        {Array.isArray(events) &&
          events.map((event) => (
            <div key={event.id} style={cardStyle}>
              <EventCard event={event} />
            </div>
          ))}
      </Box>
    </div>
  );
};

export default EventList;
