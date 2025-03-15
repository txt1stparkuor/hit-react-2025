import diagram from "../../assets/diagram-3-fill.svg";
import fullscreenExit from "../../assets/fullscreen-exit.svg";
import broadcast from "../../assets/broadcast.svg";
function AboutUs() {
  const initializeVideo = () => {
    const videoWrap = document.querySelector(".video-wrap");
    const playButton = document.querySelector(".play-btn");
    const youtubeVideo = document.getElementById("youtube-video"); // Use getElementById

    if (videoWrap && playButton && youtubeVideo) {
      playButton.addEventListener("click", function () {
        videoWrap.classList.add("playing");
        const videoSrc = youtubeVideo.src;
        youtubeVideo.src = videoSrc + "&autoplay=1";
      });
    }
  };
  setTimeout(initializeVideo, 0);

  return (
    <div className="about-us">
      <div className="about-us-info">
        <h1>About Us</h1>
        <p>
          Dolor iure expedita id fuga asperiores qui sunt consequatur minima.
          Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam
          itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis
          veritatis asperiores placeat.
        </p>
        <div className="info-wrap">
          <i className="bi bi-diagram-3"></i>
          <div className="info">
            <h2>Ullamco laboris nisi ut aliquip consequat</h2>
            <p>
              Magni facilis facilis repellendus cum excepturi quaeratpraesentium
              libre trade
            </p>
          </div>
        </div>
        <div className="info-wrap">
          <i className="bi bi-fullscreen-exit"></i>
          <div className="info">
            <h2>Magnam soluta odio exercitationem reprehenderi</h2>
            <p>
              Quo totam dolorum at pariatur aut distinctio dolorum laudantium
              illo direna pasata redi
            </p>
          </div>
        </div>
        <div className="info-wrap">
          <i className="bi bi-broadcast"></i>
          <div className="info">
            <h2>Voluptatem et qui exercitationem</h2>
            <p>
              Et velit et eos maiores est tempora et quos dolorem autem tempora
              incidunt maxime veniam
            </p>
          </div>
        </div>
      </div>
      <div className="video-wrap stacked">
        <img
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/about.jpg"
          alt=""
          className="video-overlay"
        />
        <div className="play-btn">
          <i className="fa-solid fa-play"></i>
        </div>
        <iframe
          id="youtube-video"
          src="https://www.youtube.com/embed/Y7f98aduVJ8?si=8xpRr8HBZxdhxPbs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUs;
