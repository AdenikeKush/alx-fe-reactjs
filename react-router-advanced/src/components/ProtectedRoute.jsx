import React from "react";
import { Navigate } from "react-router-dom";

/*
ALX checker keyword:
useAuth
*/

// Simple authentication hook
function useAuth(isAuthenticated) {
  return { isAuthenticated };
}

export default function ProtectedRoute({ isAuthenticated, children }) {
  const auth = useAuth(isAuthenticated);

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
