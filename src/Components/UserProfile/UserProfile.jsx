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

export const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPublicData, setUserPublicData] = useState(null);

  // Define the fetchUserData function
  const fetchUserData = async () => {
    try {
      const response = await API.get(`/user/${id}/`);
      const userData = response.data; // Fixing the data assignment
      console.log(userData);
      setUserData(userData);
    } catch (error) {
      console.log("Error fetching API:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id, userPublicData]);

  const fetchUserPublicData = async () => {
    try {
      const response = await API.get(`/user/${id}/public/`);
      const userPublicData = response.data;
      console.log("User Public Data:", userPublicData);
      setUserPublicData(userPublicData);
    } catch (error) {
      console.log("Error fetching public data:", error);
    }
  };

  const subscribe = async () => {
    try {
      await API.post(`/user/${id}/subscribe/`);
      fetchUserData();
    } catch (error) {
      console.log("Error subscribing:", error);
    }
  };

  const unsubscribe = async () => {
    try {
      await API.post(`/user/${id}/unsubscribe/`);
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 2,
      }}
    >
      <AvatarImg src={userData.img[0]} alt={userData.user} />
      <Typography variant="h6">Nickname: {userData.user}</Typography>
      <Box>
        <Subscribe href="/followers">Followers: {userData.followers}</Subscribe>
        <br />
        <Subscribe href="/following">Following: {userData.following}</Subscribe>
        <br />
      </Box>
      <Box>
        <Button
          variant="contained"
          color={userData.isSubscribed ? "secondary" : "primary"}
          onClick={userData.isSubscribed ? unsubscribe : subscribe}
        >
          {userData.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
        {userPublicData && (
          <Typography variant="body1">
            Description: {userPublicData.description}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={fetchUserPublicData} // Call fetchUserPublicData when the button is clicked
        >
          Fetch User Public Data
        </Button>
      </Box>
      <Divider />
    </Box>
  );
};
