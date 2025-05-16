import React from "react";
import "./styles.scss";
import BaseButton from "../BaseButton/BaseButton";
import SeaBg from "../SeaBg/BlackBg";
import { Navigate, useNavigate } from "react-router-dom";
function GetStarted() {
  const navigate = useNavigate();
  return (
    <div className="get-started stacked">
      <div className="get-started__wrapper">
        <h1>Ready to get started? Sign up now!</h1>
        <BaseButton
          text={"Register"}
          onClick={() => navigate("/register")}
        ></BaseButton>
      </div>

      <SeaBg></SeaBg>
    </div>
  );
}

export default GetStarted;
