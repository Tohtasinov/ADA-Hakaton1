import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import EventList from "../EventList/EventList";
import GreatEventList from "../EventList/GreatEventList";

const MainPage = () => {
  return (
    <>
      <GreatEventList />
      <EventList />
    </>
  );
};

MainPage.propTypes = {};

export default MainPage;
