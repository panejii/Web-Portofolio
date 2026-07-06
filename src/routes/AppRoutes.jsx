import { Routes, Route } from "react-router-dom";

import Landing from "../pages/landing";
import Login from "../pages/login";

import AdminLayout from "../components/admin/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import Projects from "../pages/admin/Projects";
import Skills from "../pages/admin/Skills";
import Messages from "../pages/admin/Message";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="messages" element={<Messages />} />
      </Route>
      
    </Routes>
  );
}