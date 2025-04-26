import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoginValidate } from "../utils/LoginValidate";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //console.log(formik);

  return (
    // <form onSubmit={formik.handleSubmit}>
    //   <div>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       id="username"
    //       name="username"
    //       type="username"
    //       onChange={formik.handleChange}
    //       value={formik.values.username}
    //     />
    //   </div>
    //   {formik.touched.username && formik.errors.username ? (
    //     <div style={{ color: "red" }}>{formik.errors.username}</div>
    //   ) : null}
    //   <div>
    //     <label htmlFor="email">Email Address</label>
    //     <input
    //       id="email"
    //       name="email"
    //       type="email"
    //       onChange={formik.handleChange}
    //       value={formik.values.email}
    //     />
    //   </div>
    //   {formik.touched.email && formik.errors.email ? (
    //     <div style={{ color: "red" }}>{formik.errors.email}</div>
    //   ) : null}
    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       id="password"
    //       name="password"
    //       type="password"
    //       onChange={formik.handleChange}
    //       value={formik.values.password}
    //     />
    //   </div>
    //   {formik.touched.password && formik.errors.password ? (
    //     <div style={{ color: "red" }}>{formik.errors.password}</div>
    //   ) : null}
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <Formik
        initialValues={{ email: "", password: "", username: "" , secondPassword:'', confirm: false}}
        validationSchema={LoginValidate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Ho va ten</label>
            <Field name="username" type="text"></Field>
            <ErrorMessage name="username" component="div" style={{color: 'red'}}> </ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email"> </ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">Mat khau</label>
            <Field name="password" type="text"></Field>
            <ErrorMessage name="password"> </ErrorMessage>
          </div>
          <div>
            <label htmlFor="secondPassword">Xac nhan mat khau</label>
            <Field name="secondPassword" type="text"></Field>
            <ErrorMessage name="secondPassword"> </ErrorMessage>
          </div>
          <div>
            <label htmlFor="confirm">Dieu khoan hop dong</label>
            <Field name="confirm" type="checkbox"></Field>
            <ErrorMessage name="confirm"></ErrorMessage>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
