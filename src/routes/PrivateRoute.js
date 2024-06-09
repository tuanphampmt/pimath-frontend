import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkTokenExpirationMiddleware } from "../services/auth.service";

function PrivateRoute(props) {
  const { role } = props;
  const auth = checkTokenExpirationMiddleware();
  // if (role === "admin") {
  //   return auth ? <Outlet /> : <Navigate to="/admin/login" />;
  // }
  // if (role === "user") {
  //   return auth ? <Outlet /> : <Navigate to="/login" />;
  // }
  return <Outlet />;
}

export default PrivateRoute;
