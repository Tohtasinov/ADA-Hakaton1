import React, { useEffect } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../Redux/isAuthentificatedSlice";
import { getTokenFromCookies } from "../../cookies";

export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = !!getTokenFromCookies(); // Use your getTokenFromCookies function to check authentication
    dispatch(setAuthenticated(isAuthenticated));
    if (!isAuthenticated) {
      navigate("/"); // Redirect to the login page if not authenticated
    }
  }, [dispatch, navigate]);

  return children;
};
