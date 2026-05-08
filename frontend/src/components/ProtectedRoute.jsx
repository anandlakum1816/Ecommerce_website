import React from "react";

import {
  Navigate,
} from "react-router-dom";

function ProtectedRoute({
  children,
  role,
}) {

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  // NOT LOGIN
  if (!token) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  // ROLE CHECK
  if (
    role &&
    user?.role !== role
  ) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }

  // ACCESS
  return children;

}

export default ProtectedRoute;