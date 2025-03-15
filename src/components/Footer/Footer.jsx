function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <h1>Logis</h1>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className="social-icons">
            <a className="social-icon" href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a className="social-icon" href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a className="social-icon" href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a className="social-icon" href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="useful-links">
          <h2>Useful Links</h2>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Terms of service</a>
          <a href="">Privacy policy</a>
        </div>
        <div className="our-services">
          <h2>Our Services</h2>
          <a href="">Web Design</a>
          <a href="">Web Development</a>
          <a href="">Product Management</a>
          <a href="">Marketing</a>
          <a href="">Graphic Design</a>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <div className="contact-infos">
            <p className="phone">
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p className="email">
              <b>Email:</b> info@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© Copyright <b>Logis</b> All Rights Reserved</p>
        <p>Designed by BootstrapMade</p>
      </div>
    </div>
  );
}

export default Footer;
