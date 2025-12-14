import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile (Protected)</h2>

      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="details">ProfileDetails</Link>
        <Link to="settings">ProfileSettings</Link>
      </nav>

      <Outlet />
    </div>
  );
}
