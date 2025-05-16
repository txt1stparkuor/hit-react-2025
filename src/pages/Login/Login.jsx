import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <AuthForm btnText={"Login"}>
        <div className="no-account">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </AuthForm>
    </>
  );
}

export default Login;
