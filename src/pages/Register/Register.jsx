import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <AuthForm btnText={"Register"}>
        <div className="no-account">
          You have an account? <Link to="/login">Login</Link>
        </div>
      </AuthForm>
    </>
  );
}

export default Register;
