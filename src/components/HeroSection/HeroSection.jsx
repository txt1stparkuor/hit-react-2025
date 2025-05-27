import React from "react";
import "./styles.scss";
import heroImage from "../../assets/hero.png";
import BaseButton from "../BaseButton/BaseButton";
function HeroSection() {
  return (
    <div className="hero-section wrapper">
      <div className="hero-section__content">
        <h1>Save your data storage here.</h1>
        <p>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <BaseButton>Learn more</BaseButton>
      </div>
      <div className="hero-section__img">
        <img src={heroImage} alt="nani" />
      </div>
    </div>
  );
}

export default HeroSection;
