// App.tsx
import { Routes, Route } from "react-router-dom";
import { UserProfile } from "@clerk/clerk-react";

import { Dashboard, Login } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <Routes>
      {/* Public Routes --WHERE USER IS NOT AUTHENTICATED YET */}
      <Route element={<AuthLayout/>}>
        <Route path="/Login" element={<Login />} />

      </Route>
      <Route element={<RootLayout/>}>
      {/* Protected Route WHERE USER IS AUTHENTICATED*/}
        <Route index element={<Dashboard />} />

      </Route>

      {/* Clerk pages */}
      <Route path="/user/*" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
