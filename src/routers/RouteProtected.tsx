import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/useAuth";

interface PrivateRouteProps {
  element: ReactNode;
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
};
