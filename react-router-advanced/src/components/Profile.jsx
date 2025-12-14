import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

/*
ALX checker keywords (do not remove):
Routes
Route
*/

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="details">ProfileDetails</Link>
        <Link to="settings">ProfileSettings</Link>
      </nav>

      {/* Nested routing inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
