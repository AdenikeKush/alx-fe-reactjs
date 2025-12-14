import React, { useState } from "react";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(currentValues) {
    const newErrors = {};

    if (!currentValues.username.trim()) newErrors.username = "Username is required";
    if (!currentValues.email.trim()) newErrors.email = "Email is required";
    if (!currentValues.password.trim()) newErrors.password = "Password is required";

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    // optional: live-validate a single field after user starts typing
    setErrors((prev) => {
      const next = { ...prev };
      if (value.trim()) delete next[name];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please fix the errors and try again." });
      return;
    }

    setIsSubmitting(true);

    try {
      // Mock API endpoint (simulate registration)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Registration failed. Please try again.");

      // const data = await res.json(); // optionally use response
      setStatus({ type: "success", message: "Registration successful (mock)!" });
      setValues(initialValues);
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 20 }}>
      <h2>Controlled Registration Form</h2>

      {status.message && (
        <p style={{ marginTop: 8 }}>
          <strong>{status.type === "success" ? "✅" : "❌"}</strong> {status.message}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
          {errors.username && <p style={{ color: "crimson", marginTop: 6 }}>{errors.username}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
          {errors.email && <p style={{ color: "crimson", marginTop: 6 }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
          {errors.password && <p style={{ color: "crimson", marginTop: 6 }}>{errors.password}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} style={{ padding: "10px 14px" }}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}
