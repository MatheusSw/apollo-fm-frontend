import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Settings from "../pages/settings/settings";

const queryClient = new QueryClient();

const backendClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
});

export const RootRoutes: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route
          path="/login"
          element={<Login backendClient={backendClient} />}
        />
      </Routes>
    </QueryClientProvider>
  );
};
