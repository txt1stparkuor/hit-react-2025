import React from "react";
import "./styles.scss";
function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-item">
        <div className="showcase-item__content">
          <h1 className="showcase-item__title">Fully Responsive Design</h1>
          <p className="showcase-item__desc">
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </p>
        </div>
        <div className="showcase-item__img">
          <img
            src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-1-DKDWhlFr.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="showcase-item">
        <div className="showcase-item__img">
          <img
            src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-2-C7T817Rj.jpg"
            alt=""
          />
        </div>
        <div className="showcase-item__content">
          <h1 className="showcase-item__title">Updated For Bootstrap 5</h1>
          <p className="showcase-item__desc">
            Newly improved, and full of great utility classes, Bootstrap 5 is
            leading the way in mobile responsive web development! All of the
            themes on Start Bootstrap are now using Bootstrap 5!
          </p>
        </div>
      </div>
      <div className="showcase-item">
        <div className="showcase-item__content">
          <h1 className="showcase-item__title">Easy to Use & Customize</h1>
          <p className="showcase-item__desc">
            Landing Page is just HTML and CSS with a splash of SCSS for users
            who demand some deeper customization options. Out of the box, just
            add your content and images, and your new landing page will be ready
            to go!
          </p>
        </div>
        <div className="showcase-item__img">
          <img
            src="https://start-bootstrap-ten.vercel.app/assets/bg-showcase-3-fvuC94nJ.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
