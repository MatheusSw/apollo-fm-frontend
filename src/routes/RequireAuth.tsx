import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { store } from "../stores/store";
import { useQuery } from "react-query";
import { fetchUser } from "../queries/fetchUser";
import React from "react";

export const RequireAuth: React.FC = () => {
  const { dispatch } = store;
  const auth = useAuth();
  const location = useLocation();

  const { isError, data, isLoading } = useQuery("user", fetchUser, {
    retry: false,
    onSuccess: (data) => {
      dispatch.auth.login(data);
    },
  });

  store.dispatch.loading.setLoading(isLoading);

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    store.dispatch.error.setError(true);
    return <Navigate to="/login" />;
  }

  if (!auth.me?.screen_name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
