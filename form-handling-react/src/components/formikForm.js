import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          console.log("Formik form submitted:", values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <label>Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
