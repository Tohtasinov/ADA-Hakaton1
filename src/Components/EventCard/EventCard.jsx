import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../requester";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/events/${event.id}`);
  };

  const handleParticipate = async () => {
    try {
      // Отправка POST-запроса для участия в событии
      await API.post(`/events/${event.id}/follow/`);
      // Обработка успешного участия или обновление интерфейса по необходимости
      console.log("Успешное участие в событии!");
    } catch (error) {
      console.error("Ошибка при участии в событии:", error);
    }
  };

  const defaultImage =
    "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/irving-redesign/Events_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg";

  const defaultLocation = "Bishkek";

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "16px",
    boxSizing: "border-box",
    opacity: 0.8,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    borderRadius: "8px",
  };

  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        margin: "16px",
      }}
    >
      <img
        width="100%"
        height={200}
        src={event.image || defaultImage}
        alt={event.title}
        style={{ borderRadius: "8px 8px 0 0" }}
      />
      <div style={overlayStyle}>
        <Typography fontWeight={700}>{event.title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight={600} sx={{ mr: 1 }}>
            {event.date_created}{" "}
          </Typography>
          <Chip
            sx={{ background: "rgba(255, 51, 51, 0.10)", color: "#F33" }}
            label={event.location.detail || defaultLocation}
          />
        </Box>
        <Typography variant="body2">
          {event.is_free ? "Price: Free" : "Price: $" + event.price}
        </Typography>
      </div>
      <Button variant="contained" color="primary" onClick={handleParticipate}>
        Участвовать
      </Button>
    </Box>
  );
};

export default EventCard;
