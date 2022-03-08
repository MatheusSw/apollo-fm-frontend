import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Settings from "../pages/settings/settings";

export const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
