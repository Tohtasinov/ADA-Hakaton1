import React, { useEffect } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../Redux/isAuthentificatedSlice";

export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = !!Cookies.get("accessToken");

  const navigate = useNavigate();

  if (!isAuthenticated) {
    dispatch(setAuthenticated(isAuthenticated));
    return <Navigate to="/" />;
  } else {
    dispatch(setAuthenticated(isAuthenticated));
  }
  return children;
};
