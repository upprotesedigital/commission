// App.tsx
import { Routes, Route } from "react-router-dom";
import { SignIn, UserProfile } from "@clerk/clerk-react";

import { Dashboard, Login } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import ProtectedRoute from "./lib/components/ProtectedRoute"; // Import the new component
import SignInForm from "./_auth/forms/SignInForm";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/signinform" element={<SignInForm />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}> {/* Wrap protected routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Clerk's built-in UserProfile page, also protected by default by Clerk */}
        <Route path="/user/*" element={<UserProfile />} />

        {/* For example, a dedicated user profile route under RootLayout if needed */}
        {/* <Route path="/settings" element={<SettingsPage />} /> */}
      </Route>     
    </Routes>
  );
}

export default App;