import React from "react";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByUsername } from "../Redux/UserSlice";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toDetails = () => {
    navigate(`/events/${event.id}`);
  };

  const user = useSelector((state) => state.user);
  const toUser = async (event) => {
    navigate(`/profile/${event.user.id}`);
    // try {
    //   // Rufen Sie den Benutzer basierend auf event.user auf
    //   await dispatch(fetchUserByUsername(event));
    //   // Jetzt haben Sie den Benutzer im Redux-Speicher
    //   // Navigieren Sie zur Benutzerprofilseite mit user.id
    //   if (user.id) {
    //     navigate(`/profile/${user.id}`);
    //   } else {
    //     console.log("User ID not found in Redux store.");
    //   }
    // } catch (error) {
    //   console.log("Error fetching user by username:", error);
    // }
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
        transition: "150ms",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
      // onClick={toDetails}
    >
      <img
        width="100%"
        height={200}
        src={event.image || defaultImage}
        alt={event.title}
        style={{ borderRadius: "8px 8px 0 0" }}
      />
      <div style={overlayStyle}>
        <Avatar
          sx={{
            width: "24px",
            height: "24px",
            transition: "150ms",
            "&:hover": {
              transform: "scale(1.3)",
            },
          }}
          src={event.user}
          onClick={() => toUser(event)}
        />
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
    </Box>
  );
};

export default EventCard;
