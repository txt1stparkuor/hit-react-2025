import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`toggle-container ${isOn ? "on" : "off"}`}
      onClick={() => setIsOn(!isOn)}
    >
      <span className={`toggle-label ${isOn ? "right" : "left"}`}>
        {isOn ? "ON" : "OFF"}
      </span>
      <div className="toggle-button">
        <div className="inner-circle"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
