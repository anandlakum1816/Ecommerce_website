import React from "react";

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // GET TOKEN
  const adminToken = localStorage.getItem("adminToken");

  // NOT LOGIN
  if (!adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  // LOGIN
  return children;
}

export default ProtectedRoute;
