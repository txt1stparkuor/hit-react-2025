import "./styles.scss";
function Footer() {
  return (
    <footer className="wrapper">
      <div className="footer">
        <div className="footer__contact-details">
          <h1>eNno</h1>
          <div className="footer__address">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
          </div>
          <div className="footer__contact">
            <span>
              <b>Phone: </b> +1 5589 55488 55
            </span>
            <span>
              <b>Email: </b> info@example.com
            </span>
          </div>
        </div>
        <div className="footer__useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Home</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>About us</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Services</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Terms of service</a>
            </li>
          </ul>
        </div>
        <div className="footer__services">
          <h4>Our Services</h4>
          <ul>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Web Design</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Web Development</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Product Management</a>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <a>Marketing</a>
            </li>
          </ul>
        </div>
        <div className="footer__follow-us">
          <h4>Follow Us</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="footer__social-icons">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Copyright <b>eNno</b> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
