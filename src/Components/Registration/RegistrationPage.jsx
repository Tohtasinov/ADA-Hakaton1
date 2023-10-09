import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Dialog, DialogTitle } from "@mui/material";
// import RegistrationStepper from "./Registrarion";

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f0f0f0",
};

const containerStyle = {
  width: "80%",
  maxWidth: 400,
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const RegistrationPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={centerStyle}>
      <Box sx={containerStyle}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Registration
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Registration</DialogTitle>
          {/* <RegistrationStepper /> */}
        </Dialog>
      </Box>
    </div>
  );
};

export default RegistrationPage;
