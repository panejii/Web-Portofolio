import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/login";
import Dashboard from "../pages/admin/dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}