import React from "react";
import { Typography } from "@mui/material";

const UserEvents = ({ events }) => {
  return (
    <div>
      <Typography variant="h6">User Events:</Typography>
      {events.map((event) => (
        <Typography key={event.id}>{event.title}</Typography>
      ))}
    </div>
  );
};

export default UserEvents;
