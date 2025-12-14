import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: "0 16px", fontFamily: "Arial, sans-serif" }}>
      <h1>Form Handling in React</h1>
      <p>Controlled Components → Formik + Yup</p>

      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
