import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals";
import Journal from "../pages/Journal";
import Analytics from "../pages/Analytics";
import Activity from "../pages/Activity";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="goals" element={<Goals />} />
        <Route path="journal" element={<Journal />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="activity" element={<Activity />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;