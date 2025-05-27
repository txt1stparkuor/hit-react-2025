import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import logo from "../../assets/Logo (1).png";
import "./styles.scss";
import { useNavigate, Link } from "react-router-dom";

function Header({ isSignedIn, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="header wrapper">
      <Link to="/">
        <img src={logo} alt="Application Logo" />
      </Link>

      <div className="header__right">
        {!isSignedIn ? (
          <BaseButton onClick={() => navigate("/signin")}>Sign In</BaseButton>
        ) : (
          <>
            <BaseButton onClick={() => navigate("/profile")}>
              Profile
            </BaseButton>
            <BaseButton onClick={onLogout}>Logout</BaseButton>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
