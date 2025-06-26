// App.tsx
import { Routes, Route } from "react-router-dom";
import { UserProfile } from "@clerk/clerk-react";


import { Dashboard, Login } from "./pages";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/Login" element={<Login />} />

      {/* Protected Route */}
      <Route index element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />

      {/* Clerk pages */}
      <Route path="/user/*" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
