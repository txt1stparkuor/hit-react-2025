import { useRef, useState } from "react";
import "./styles.scss";
function AboutUs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc =
    "https://www.youtube.com/embed/Y7f98aduVJ8?si=8xpRr8HBZxdhxPbs";
  function handlePlayVideo() {
    setIsPlaying(true);
  }
  return (
    <div className="about-us wrapper">
      <div className="about-us__title title">
        <div className="stacked">
          <h1>ABOUT US</h1>
          <span>ABOUT</span>
        </div>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="about-us__video stacked">
        <img
          src="https://bootstrapmade.com/content/demo/eNno/assets/img/about.png"
          alt=""
        />
        <button className="about-us__circle" onClick={handlePlayVideo}>
          <i className="bi bi-play-fill"></i>
        </button>
        <iframe
          src={!isPlaying ? videoSrc : videoSrc + "&autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
          className={isPlaying ? "playing" : ""}
        ></iframe>
      </div>
      <div className="about-us__content">
        <h2>
          Voluptatem dignissimos provident quasi corporis voluptates sit
          assumenda.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="about-us__check-item">
          <i className="bi bi-check2-all"></i>
          <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </div>
        <div className="about-us__check-item">
          <i className="bi bi-check2-all"></i>
          <span>
            Duis aute irure dolor in reprehenderit in voluptate velit.{" "}
          </span>
        </div>
        <div className="about-us__check-item">
          <i className="bi bi-check2-all"></i>
          <span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate trideta storacalaperda
            mastiro dolore eu fugiat nulla pariatur.
          </span>
        </div>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
      </div>
      <div className="about-us__datas">
        <div className="about-us__data">
          <h1>232</h1>
          <p>Clients</p>
        </div>
        <div className="about-us__data">
          <h1>521</h1>
          <p>Projects</p>
        </div>
        <div className="about-us__data">
          <h1>1453</h1>
          <p>Hours Of Support</p>
        </div>
        <div className="about-us__data">
          <h1>32</h1>
          <p>Workers</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
