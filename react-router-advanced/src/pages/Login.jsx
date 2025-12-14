import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin, isAuthenticated }) {
  const navigate = useNavigate();

  function handleLogin() {
    onLogin(true);
    navigate("/profile", { replace: true });
  }

  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated ? (
        <p>✅ You are already logged in.</p>
      ) : (
        <>
          <p>This is a simulated login.</p>
          <button onClick={handleLogin}>Log in</button>
        </>
      )}
    </div>
  );
}
