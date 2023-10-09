import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Modal } from "@mui/material";
import styles from "../Header/styles";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo1 from "../../assets/logo1.svg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import headerSh from "../../assets/headerSh.svg";
import { Login } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "./../Login/Logout";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
// import CreateEventModal from "../CreateEventModal";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log("isAuthenticated---from header", isAuthenticated);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAccountButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Grid container spacing={2} sx={styles.header}>
        {/* First row */}
        <Grid item xs={6}>
          <Box sx={styles.innerBox}>
            <img
              src={logo1}
              alt="logo"
              width={45}
              height={45}
              style={{ marginLeft: "15px" }}
            />
            <IconButton style={{ backgroundColor: "white", marginLeft: "63%" }}>
              <AddCircleIcon />
            </IconButton>
            {/* <CreateEventModal /> */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={styles.innerBox2}>
            {/* Search Button */}
            <Box sx={styles.buttonContainer}>
              <IconButton style={{ backgroundColor: "white", color: "black" }}>
                <SearchIcon />
              </IconButton>
            </Box>
            {/* Message Button */}
            <Box sx={styles.buttonContainer}>
              <IconButton sx={styles.button}>
                <MessageIcon />
              </IconButton>
            </Box>
            <Box sx={styles.buttonContainer}>
              <IconButton sx={styles.button}>
                <NotificationsIcon />
              </IconButton>
            </Box>
            {/* Account Button */}

            {isAuthenticated ? (
              <Logout />
            ) : (
              <>
                <Box sx={styles.buttonContainer}>
                  <IconButton
                    sx={styles.button}
                    onClick={handleAccountButtonClick}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Box>
                <Login
                  isModalOpen={isModalOpen}
                  handleCloseModal={handleCloseModal}
                />
              </>
            )}
          </Box>
        </Grid>

        {/* Second row */}
        <Grid item xs={12} style={{ marginLeft: "80px" }}>
          <img src={headerSh} alt="headerSh" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
