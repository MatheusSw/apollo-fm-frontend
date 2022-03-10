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
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={<Login backendClient={backendClient} />}
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </QueryClientProvider>
  );
};
