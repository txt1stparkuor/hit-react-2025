import { useState } from "react";
import axios from "axios";
import { Formik, ErrorMessage, Field, Form } from "formik";
import logo from "../../assets/Logo (1).png";
import "./styles.scss";
import { LoginValidate } from "../../utils/LoginValidate";
import BaseButton from "../../components/BaseButton/BaseButton";

function SignIn({ onLoginSuccess }) {
  // Accepts prop
  const LOGIN_API_URL = "https://reqres.in/api/login";
  const [apiError, setApiError] = useState("");
  const [apiSuccessMessage, setApiSuccessMessage] = useState("");

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    setApiError("");
    setApiSuccessMessage("");
    try {
      const response = await axios.post(
        LOGIN_API_URL,
        { email: values.username, password: values.password },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      console.log("Login Success:", response.data);
      if (onLoginSuccess) {
        onLoginSuccess(response.data.token);
      }
      resetForm();
    } catch (error) {
      console.error("Login Failed:", error);
      if (error.response) {
        setApiError(error.response.data.error || "An unknown error occurred.");
      } else if (error.request) {
        setApiError(
          "Network error: No response from server. Please check your internet connection."
        );
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="logo-wrap">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginValidate}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <div className="center-wrap">
            <h1 className="center-wrap__title">Sign In</h1>
            <Form className="sign-in">
              {apiError && (
                <div className="sign-in__api-message sign-in__api-message--error">
                  {apiError}
                </div>
              )}
              {apiSuccessMessage && (
                <div className="sign-in__api-message sign-in__api-message--success">
                  {apiSuccessMessage}
                </div>
              )}

              <div className="sign-in__field">
                <label htmlFor="username" className="sign-in__label">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="sign-in__input"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="sign-in__error"
                />
              </div>

              <div className="sign-in__field">
                <label htmlFor="password" className="sign-in__label">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="sign-in__input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="sign-in__error"
                />
              </div>

              <BaseButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? `Signing in...` : "Sign In"}
              </BaseButton>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default SignIn;
