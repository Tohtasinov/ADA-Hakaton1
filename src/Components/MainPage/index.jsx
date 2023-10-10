import React from "react";
import PropTypes from "prop-types";
import { Alert, Box, Button, IconButton, Snackbar } from "@mui/material";
import EventList from "../EventList/EventList";
import GreatEventList from "../EventList/GreatEventList";
import Hashtags from "../Hashtags";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import snackbarReducer from "../Redux/SnackBarReducer";
import { closeSnackbar, openSnackbar } from "../Redux/SnackBarActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const openData = useSelector((state) => state.snackbar);
  const open = openData.isOpen;
  console.log("open from mainpage", openData);
  console.log("open from mainpage", open);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeSnackbar());
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

MainPage.propTypes = {};

export default MainPage;
