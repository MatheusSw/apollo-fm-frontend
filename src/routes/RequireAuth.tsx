import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  //let auth = useAuth();
  let location = useLocation();

  if (false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
