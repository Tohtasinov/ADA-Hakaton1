import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Modal,
  Snackbar,
  Toolbar,
  Typography,
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
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logotip.svg";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
// import CreateEventModal from "../CreateEventModal";
import CreateEventModal from "./../CreateEventModal/index";
import {
  fetchUser,
  subscribeUser,
  unsubscribeUser,
} from "../Redux/UserSliceSub";

const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [fontSize, setFontSize] = useState("20px");
  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / window.innerHeight) * 100;

    if (scrollPercentage <= 10) {
      // Wenn der Benutzer 10% erreicht hat, ändere den Hintergrund auf eine Farbe
      setBackgroundColor("2px");
    } else if (scrollPercentage >= 10 && scrollPercentage <= 20) {
      // Wenn der Benutzer 20% erreicht hat, ändere den Hintergrund auf eine andere Farbe
      setBackgroundColor("10px");
    } else if (scrollPercentage >= 20 && scrollPercentage <= 30) {
      // Wenn der Benutzer weniger als 10% erreicht hat, setze den Hintergrund zurück
      setBackgroundColor("20px");
      setFontSize("25px");
    } else if (scrollPercentage >= 30) {
      // Wenn der Benutzer weniger als 10% erreicht hat, setze den Hintergrund zurück
      setBackgroundColor("25px");
      setFontSize("30px");
    }
  };

  useEffect(() => {
    // Füge den Event-Listener beim Mounten der Komponente hinzu
    window.addEventListener("scroll", handleScroll);

    // Entferne den Event-Listener beim Unmounten der Komponente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const user = useSelector((state) => state.user);
  console.log("user from header", user);
  const dispatch = useDispatch();

  const handleSubscribe = async () => {
    if (user) {
      // Benutzer ist eingeloggt
      await dispatch(subscribeUser(user.id)); // Hier wird die subscribeUser-Thunk mit der Benutzer-ID aufgerufen
      await dispatch(fetchUser(user.id));
    }
  };

  // Funktion zum Deabonnieren eines Benutzers
  const [now, setNow] = useState(false);
  const handleUnsubscribe = () => {
    if (user) {
      // Benutzer ist eingeloggt
      dispatch(unsubscribeUser(user.id)); // Hier wird die unsubscribeUser-Thunk mit der Benutzer-ID aufgerufen
      dispatch(fetchUser(user.id));
      setNow(true);
    }
  };

  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log("isAuthenticated---from header", user);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAccountButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (now) {
      dispatch(fetchUser(user.id));
      console.log("es hat funktioniert");
    }
  }, [now]);
  // const userImage = user.img[0];
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
          alignItems: "flex-start",
        }}
      >
        {/* First row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            width: "309px",
            borderRadius: "8px 44px 44px 44px",
            background: user
              ? "rgba(42, 42, 42, 0.30)"
              : "rgba(42, 42, 42, 0.30)",
            backdropFilter: "blur(20px)",
            px: "16px",
            py: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {user ? (
              <Avatar src={user && user.img} />
            ) : (
              <Typography
                sx={{
                  transition: "letter-spacing 150ms",
                  letterSpacing: backgroundColor,
                  fontSize: fontSize,
                }}
              >
                Event
              </Typography>
            )}
            {user && <Typography>{user.user}</Typography>}
          </Box>
          {user ? (
            <Button
              sx={{ height: "53px", borderRadius: "44px", px: "24px" }}
              onClick={handleSubscribe}
            >
              subscribe
            </Button>
          ) : (
            <Box>
              <CreateEventModal />
              {/* <Snackbar
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
              /> */}
            </Box>
          )}
        </Box>

        {user && (
          <Box
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              width: "309px",
              borderRadius: "44px",
              background: "rgba(42, 42, 42, 0.30)",
              backdropFilter: "blur(20px)",
              padding: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>{user.followers}</Typography>
                <Typography sx={{ fontSize: "12px" }}>followers</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>{user.following}</Typography>
                <Typography sx={{ fontSize: "12px" }}>followed</Typography>
              </Box>
            </Box>
          </Box>
        )}
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
