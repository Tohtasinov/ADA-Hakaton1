import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  paddingTop: "140px",
  paddingLeft: "100px",
  paddingRight: "100px",
  paddingBottom: "82px",
  background: "#F0F0F0",
  display: "flex",
  flexDirection: "column",
}));

export const NavList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const BottomFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  mt: "25px",
}));
