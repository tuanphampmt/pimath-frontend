import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  return <Outlet />;
}

export default ProtectedRoute;
