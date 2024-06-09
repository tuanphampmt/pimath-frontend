import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkTokenExpirationMiddleware } from "../services/auth.service";

function PublicRoute(props) {
  const { role } = props;
  const auth = checkTokenExpirationMiddleware();
  if (role === "admin") {
    return auth ? <Navigate to="/admin/home" /> : <Outlet />;
  }
  if (role === "user") {
    return auth ? <Navigate to="/home" /> : <Outlet />;
  }
}

export default PublicRoute;
