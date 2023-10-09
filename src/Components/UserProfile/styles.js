import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const Subscribe = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  // color: theme.palette.primary.main, // Change this to your desired color
}));

export const AvatarImg = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  marginTop: "50px",
  // backgroundColor: theme.palette.secondary.main, // Change this to your desired color
}));
