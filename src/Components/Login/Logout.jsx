import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../Redux/isAuthentificatedSlice";
import { Box, Button } from "@mui/material";
import { removeTokensFromCookies } from "../../cookies";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Hier kannst du die notwendigen Schritte zum Ausloggen durchführen.
    // Zum Beispiel, lösche den AccessToken-Cookie und setze die Authentifizierung auf false.

    removeTokensFromCookies();
    dispatch(setAuthenticated(false));
    navigate("/");
    // Hier kannst du den Benutzer nach dem Ausloggen zu einer bestimmten Seite weiterleiten.
    // Zum Beispiel, zur Startseite ("/").
    // Falls du React Router verwendest, könntest du `useNavigate` verwenden, um zu navigieren.
    // import { useNavigate } from "react-router-dom";
    // const navigate = useNavigate();
    // navigate("/");
  };

  return (
    <Box>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
};
