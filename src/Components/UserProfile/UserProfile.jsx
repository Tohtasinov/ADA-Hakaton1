import React, { useEffect, useState } from "react";
import API from "../../requester";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { AvatarImg, Subscribe } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/UserSlice";
import EventCard from "../EventCard/EventCard";

export const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const dispatch = useDispatch(); // Redux useDispatch-Hook verwenden
  const user = useSelector((state) => state.user);
  console.log("user from User Profile", user);
  console.log("userEvents from User Profile", userEvents);

  // Define the fetchUserData function
  const fetchUserData = async () => {
    try {
      const response = await API.get(`/user/${id}/`);
      const userData = response.data;
      console.log(userData);
      setUserData(userData);
      // Hier wird der Benutzer im Redux-Speicher gespeichert
      dispatch(setUser(userData));
      // Rufen Sie die Events des Benutzers auf
      const eventsResponse = await API.get(
        `/events/?user===${userData.user}&limit=10`
      );
      const userEventsData = eventsResponse.data.results;
      setUserEvents(userEventsData);
    } catch (error) {
      console.log("Error fetching API:", error);
    }
  };

  // Define the subscribe and unsubscribe functions
  const subscribe = async () => {
    try {
      // Sending a POST request to /user/id/subscribe/
      await API.post(`/user/${id}/subscribe/`);
      // Update user data after successful subscription
      fetchUserData();
    } catch (error) {
      console.log("Error subscribing:", error);
    }
  };

  const unsubscribe = async () => {
    try {
      // Sending a POST request to /user/id/unsubscribe/
      await API.post(`/user/${id}/unsubscribe/`);
      // Update user data after successful unsubscription
      fetchUserData();
    } catch (error) {
      console.log("Error unsubscribing:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  if (!userData) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
        marginTop: "100px",
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
      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "24px" }}>
        {Array.isArray(userEvents) &&
          userEvents.map((event) => (
            <div key={event.id} style={cardStyle}>
              <EventCard event={event} />
            </div>
          ))}
      </Box>
    </div>
  );
};
