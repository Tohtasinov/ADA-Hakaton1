import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import CreateEventForm from "../CreateEvent";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Redux/isAuthentificatedSlice";

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
      <Button variant="contained" onClick={handleOpen}>
        Veranstaltung erstellen
      </Button>
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
