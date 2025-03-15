function Banner() {
  return (
    <div className="banner stacked">
      <img
        src="https://bootstrapmade.com/content/demo/Logis/assets/img/world-dotted-map.png"
        alt="dotted map"
        className="bg-image"
      />
      <div className="content">
        <div className="left-container">
          <h1>Your Lightning Fast Delivery Partner</h1>
          <p>
            Facere distinctio molestiae nisi fugit tenetur repellat non
            praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
            reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
            occaecati odio est possimus vel reprehenderit
          </p>
          <div className="search-wrap">
            <input
              type="text"
              className="search"
              placeholder="Your ZIP code or City. e.g. New York"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="delivery-data-wrap">
            <div className="delivery-data">
              <h2>232</h2>
              <div className="line"></div>
              <p>Clients</p>
            </div>
            <div className="delivery-data">
              <h2>521</h2>
              <div className="line"></div>
              <p>Projects</p>
            </div>
            <div className="delivery-data">
              <h2>1453</h2>
              <div className="line"></div>
              <p>Support</p>
            </div>
            <div className="delivery-data">
              <h2>32</h2>
              <div className="line"></div>
              <p>Workers</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img
            src="https://bootstrapmade.com/content/demo/Logis/assets/img/hero-img.svg"
            alt="search-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
