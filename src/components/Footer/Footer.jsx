import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer wrapper">
      <div className="footer__left">
        <ul className="footer__nav">
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Signup</Link>
          </li>
        </ul>
        <p className="footer__copyright">
          © Your Website 2023. All Rights Reserved.
        </p>
      </div>
      <div className="footer__right">
        <a href="https://youtu.be/Nu8hToYHDTg?si=lnL-GsnPPGRnwWl_">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=ZsUGxyz3RvE">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://youtu.be/ony539T074w?si=VDbGDQS1GanueMT3">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
