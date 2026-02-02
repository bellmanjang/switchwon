import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

function getToken() {
  return localStorage.getItem("access_token");
}

export function RequireAuth({ children }: PropsWithChildren) {
  const location = useLocation();
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
