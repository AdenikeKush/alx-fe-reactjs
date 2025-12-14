import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // simple persistence so refresh doesn't log you out
  useEffect(() => {
    const saved = localStorage.getItem("isAuthenticated");
    if (saved === "true") setIsAuthenticated(true);
  }, []);

  function onLogin(value) {
    setIsAuthenticated(value);
    localStorage.setItem("isAuthenticated", String(value));
  }

  function onLogout() {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  }

  return (
    <BrowserRouter>
      <div style={{ maxWidth: 800, margin: "30px auto", padding: "0 16px", fontFamily: "Arial, sans-serif" }}>
        <h1>React Router Advanced</h1>

        <nav style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>

          {isAuthenticated ? (
            <button onClick={onLogout}>Logout</button>
          ) : (
            <span style={{ opacity: 0.7 }}>Not logged in</span>
          )}
        </nav>

        <Routes>
          {/* Basic route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic route example */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />

          {/* Login */}
          <Route
            path="/login"
            element={<Login onLogin={onLogin} isAuthenticated={isAuthenticated} />}
          />

          {/* Protected route + nested routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* default nested route */}
            <Route index element={<Navigate to="details" replace />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<p>404 - Page not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
