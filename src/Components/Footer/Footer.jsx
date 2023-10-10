import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        padding: "40px",
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="h4" color="primary">
                Event
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" color="textSecondary">
            Suzi Wong is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </Typography>
        </Grid>

        {/* Plan Events */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            We are XYZ company, dedicated to providing the best service to our
            customers.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Plan Events
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Create and Set Up
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Sell Tickets
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Online RSVP
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Online Events
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
