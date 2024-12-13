import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "Components";
import AMDashboard from "./AssetManager/AssetManagerDashboard/Dashboard";
import MainLayout from "Components/Layout/Layout";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<WelcomeScreen />}
      />
      <Route
        path="/landingPage"
        element={<MainLayout />}
      />
      <Route
        path="/assetManagerDashboard"
        element={<AMDashboard />}
      />
    </Routes>
  );
}

export default AllRoutes;
