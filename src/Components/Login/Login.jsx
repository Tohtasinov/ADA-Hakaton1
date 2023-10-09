import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import API from "../../requester";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setRefreshTokenToCookies, setTokenToCookies } from "../../cookies";

export const Login = ({ isModalOpen, handleCloseModal }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const response = await API.post("/api/token/", formData);
      const { access, refresh } = response.data;
      setTokenToCookies(access);
      setRefreshTokenToCookies(refresh);
      // Weiterleitung oder andere Aktion nach der Anmeldung
      navigate("main");
      handleCloseModal(); // Schließt das Modal nach der Anmeldung
    } catch (error) {
      console.error("Fehler bei der Anmeldung: ", error);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Benutzername"
                  variant="outlined"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Passwort"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Anmelden
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
