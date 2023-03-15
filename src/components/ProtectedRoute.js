import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
