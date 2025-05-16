import React from "react";
import "./styles.scss";
import BaseButton from "../BaseButton/BaseButton";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate=useNavigate();
  return (
    <header className="header wrapper">
      <Link className="header__logo" to="/">Start Bootstrap</Link>
      <BaseButton text={"Login"} onClick={() => navigate('/login')}></BaseButton> 
    </header>
  );
}

export default Header;
