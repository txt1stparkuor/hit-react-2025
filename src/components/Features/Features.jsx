import React from "react";
import "./styles.scss";
function Features() {
  return (
    <div className="features wrapper">
      <div className="feature">
        <i className="fa-regular fa-window-maximize"></i>
        <h1 className="feature__title">Fully Responsive</h1>
        <p className="feature__desc">
          This theme will look great on any device, no matter the size!
        </p>
      </div>
      <div className="feature">
        <i className="fa-solid fa-layer-group"></i>
        <h1 className="feature__title">Bootstrap 5 Ready</h1>
        <p className="feature__desc">
          Featuring the latest build of the new Bootstrap 5 framework!
        </p>
      </div>
      <div className="feature">
        <i className="fa-solid fa-terminal"></i>
        <h1 className="feature__title">Easy to Use</h1>
        <p className="feature__desc">
          Ready to use with your own content, or customize the source files!
        </p>
      </div>
    </div>
  );
}

export default Features;
