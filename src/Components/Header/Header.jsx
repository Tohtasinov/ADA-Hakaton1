import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Toolbar,
} from "@mui/material";
import styles from "../Header/styles";
import SearchIcon from "../../assets/Icons/search.svg";
import MessageIcon from "../../assets/Icons/message.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "../../assets/Icons/notification.svg";
import logo1 from "../../assets/logo1.svg";
import AddCircleIcon from "../../assets/Icons/add.svg";
import headerSh from "../../assets/headerSh.svg";
import { Login } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "./../Login/Logout";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
// import CreateEventModal from "../CreateEventModal";
import CreateEventModal from "./../CreateEventModal/index";

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
    <AppBar
      position="sticky"
      sx={{
        px: "60px",
        background: "transparent",
        boxShadow: "none",
        mt: "16px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* First row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            width: "309px",
            borderRadius: "8px 44px 44px 44px",
            background: "rgba(42, 42, 42, 0.30)",
            backdropFilter: "blur(20px)",
            px: "16px",
            py: "8px",
          }}
        >
          <Avatar src={logo1} />
          <IconButton sx={{ width: "53px", height: "53px" }}>
            <img src={AddCircleIcon} alt="" />
          </IconButton>
          {/* <CreateEventModal /> */}
        </Box>
        {/* Search Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            width: "309px",
            borderRadius: "44px 8px 44px 44px",
            background: "rgba(42, 42, 42, 0.30)",
            backdropFilter: "blur(20px)",
            px: "16px",
            py: "8px",
          }}
        >
          <IconButton sx={{ width: "53px", height: "53px" }}>
            <img src={SearchIcon} alt="" />
          </IconButton>
          {/* Message Button */}
          <IconButton>
            <img src={MessageIcon} alt="" />
          </IconButton>
          <Box>
            <IconButton>
              <img src={NotificationsIcon} alt="" />
            </IconButton>
          </Box>
          {/* Account Button */}

          {isAuthenticated ? (
            <Logout />
          ) : (
            <>
              <Box>
                <Avatar onClick={handleAccountButtonClick} />
              </Box>
              <Login
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
              />
            </>
          )}
        </Box>

        {/* Second row */}
        {/* <Grid item xs={12} style={{ marginLeft: "80px" }}>
          <img src={headerSh} alt="headerSh" />
        </Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
