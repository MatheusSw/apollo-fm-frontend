import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Settings from "../pages/settings/settings";
import { RequireAuth } from "./RequireAuth";
import React from "react";

export const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
