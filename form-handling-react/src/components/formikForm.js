import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().trim().email("Invalid email address").required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <h2>Formik + Yup Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting, setStatus }) => {
          setStatus(null);

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

            setStatus({ type: "success", message: "Registration successful (mock)!" });
            resetForm();
          } catch (err) {
            setStatus({ type: "error", message: err.message || "Something went wrong." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <>
            {status?.message && (
              <p style={{ marginTop: 8 }}>
                <strong>{status.type === "success" ? "✅" : "❌"}</strong> {status.message}
              </p>
            )}

            <Form noValidate>
              <div style={{ marginBottom: 12 }}>
                <label htmlFor="username">Username</label>
                <br />
                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  style={{ width: "100%", padding: 8, marginTop: 6 }}
                />
                <ErrorMessage name="username" component="p" style={{ color: "crimson", marginTop: 6 }} />
              </div>

              <div style={{ marginBottom: 12 }}>
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  style={{ width: "100%", padding: 8, marginTop: 6 }}
                />
                <ErrorMessage name="email" component="p" style={{ color: "crimson", marginTop: 6 }} />
              </div>

              <div style={{ marginBottom: 12 }}>
                <label htmlFor="password">Password</label>
                <br />
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  style={{ width: "100%", padding: 8, marginTop: 6 }}
                />
                <ErrorMessage name="password" component="p" style={{ color: "crimson", marginTop: 6 }} />
              </div>

              <button type="submit" disabled={isSubmitting} style={{ padding: "10px 14px" }}>
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
