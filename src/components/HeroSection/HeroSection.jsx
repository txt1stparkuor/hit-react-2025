import React from "react";
import "./styles.scss";
import SeaBg from "../SeaBg/BlackBg";
function HeroSection({ text, children }) {
  return (
    <>
      <div className="hero-section stacked">
        <SeaBg></SeaBg>
        <h1 className="hero-section__text">{text}</h1>
        {children}
      </div>
    </>
  );
}

export default HeroSection;
