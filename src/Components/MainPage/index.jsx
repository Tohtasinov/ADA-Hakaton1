import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import EventList from "../EventList/EventList";
import GreatEventList from "../EventList/GreatEventList";
import Hashtags from "../Hashtags";

const MainPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <GreatEventList />
      <Box
        sx={{
          transform: "translateY(-90px)",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Hashtags />
      </Box>
      <Box sx={{ maxWidth: "100%" }}>
        <EventList />
      </Box>
      <Box
        sx={{
          transform: "translateY(-90px)",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <Hashtags />
      </Box>
    </Box>
  );
};

MainPage.propTypes = {};

export default MainPage;
