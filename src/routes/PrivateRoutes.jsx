import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token"); // Or check context/auth state

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoutes
