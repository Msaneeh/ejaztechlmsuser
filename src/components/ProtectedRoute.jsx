import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "@/store/AuthContext";

const ProtectedRoute = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;