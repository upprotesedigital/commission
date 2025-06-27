import { useAuth } from "@clerk/clerk-react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();

  // If Clerk is still loading, you might want to show a loading indicator
  if (!isLoaded) {
    return <div>Loading authentication...</div>; // Or a spinner/skeleton
  }

  // If the user is not signed in, redirect them to the login page
  if (!isSignedIn) {
    return <Navigate to="/Login" replace />;
  }

  // If the user is signed in, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;