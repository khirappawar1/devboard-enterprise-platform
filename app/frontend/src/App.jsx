import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Deployments from "./pages/Deployments";
import Pods from "./pages/Pods";
import Monitoring from "./pages/Monitoring";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/deployments" element={<Deployments />} />

        <Route path="/pods" element={<Pods />} />

        <Route path="/monitoring" element={<Monitoring />} />

        <Route path="/settings" element={<Settings />} />

      </Route>

    </Routes>
  );
}