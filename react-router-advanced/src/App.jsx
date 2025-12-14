import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // persist login state
  useEffect(() => {
    const saved = localStorage.getItem("isAuthenticated");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  function handleLogin(value) {
    setIsAuthenticated(value);
    localStorage.setItem("isAuthenticated", String(value));
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  }

  return (
    <BrowserRouter>
      <div style={{ maxWidth: 800, margin: "30px auto", padding: "0 16px" }}>
        <h1>React Router Advanced</h1>

        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>

          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <span>Not logged in</span>
          )}
        </nav>

        <Routes>
          {/* Basic route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic routing */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />

          {/* Login */}
          <Route
            path="/login"
            element={
              <Login
                onLogin={handleLogin}
                isAuthenticated={isAuthenticated}
              />
            }
          />

          {/* Protected route with nested routing handled in Profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
