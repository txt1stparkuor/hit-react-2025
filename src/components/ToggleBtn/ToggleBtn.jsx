import React, { useState } from "react";
import "./styles.scss";

const ToggleBtn = ({isDark, handleChangeTheme}) => {
  return (
    <div
      className={`toggle-container ${isDark ? "on" : "off"}`}
      onClick={handleChangeTheme}
    >
      <span className={`toggle-label ${isDark ? "right" : "left"}`}>
        {isDark ? "Dark " : "Light"}
      </span>
      <div className="toggle-button">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
};

export default ToggleBtn;