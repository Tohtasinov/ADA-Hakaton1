import React, { useState } from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import CreateEventForm from "../CreateEvent";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";
import AddCircleIcon from "../../assets/Icons/add.svg";

function CreateEventModal() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!isAuthenticated) {
    // Hier könntest du eine Meldung anzeigen oder den Zugriff verweigern
    return <div>Du bist nicht angemeldet.</div>;
  }

  return (
    <div>
      <IconButton onClick={handleOpen} sx={{ width: "53px", height: "53px" }}>
        <img src={AddCircleIcon} alt="" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <CreateEventForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default CreateEventModal;
