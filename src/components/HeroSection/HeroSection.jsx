import "./styles.scss";
function HeroSection() {
  return (
    <div className="hero-section wrapper">
      <div className="hero-section__content">
        <h1>Elegant and creative solutions</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="hero-section__btn-wrap">
          <button>
            <span>Get Started</span>
          </button>
          <div className="hero-section__watch-video">
            <i className="bi bi-play-circle"></i>
            <span>Watch video</span>
          </div>
        </div>
      </div>
      <div className="hero-section__img">
        <img
          src="https://bootstrapmade.com/content/demo/eNno/assets/img/hero-img.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
