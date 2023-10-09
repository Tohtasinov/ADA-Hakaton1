import React, { useState } from "react";
import { Dialog, DialogTitle, Button } from "@mui/material";
import RegistrationStepper from "../Registration/Registrarion";

const RegistrationDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registration</DialogTitle>
      <RegistrationStepper />
    </Dialog>
  );
};

export default RegistrationDialog;
