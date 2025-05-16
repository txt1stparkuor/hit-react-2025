import React from "react";
import "./styles.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BaseButton from "../BaseButton/BaseButton";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ btnText, children }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is not empty"),
        password: Yup.string().required("Password is not empty"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className="center-wrap">
          <Form className="auth-form">
            <div className="auth-form__close" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h1 className="auth-form__title">{btnText}</h1>

            <div className="auth-form__field">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="auth-form__input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="auth-form__error"
              />
            </div>

            <div className="auth-form__field">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="auth-form__input"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="auth-form__error"
              />
            </div>

            <BaseButton type="submit" disabled={isSubmitting} text={btnText}>
              {isSubmitting ? `${btnText}...` : btnText}
            </BaseButton>
            {children}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AuthForm;
