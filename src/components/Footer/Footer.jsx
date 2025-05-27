import React from "react";
import "./styles.scss";
import logo from "../../assets/Logo (1).png";
import chatIcon from "../../assets/Ellipse 68.png";
function Footer() {
  return (
    <>
      <div className="footer-line"></div>
      <footer className="footer wrapper">
        <div className="footer-content">
          <div className="footer-content__contact">
            <div className="footer-content__logo">
              <img src={logo} alt="" />
              <h3>DataWarehouse</h3>
            </div>

            <div className="footer-content__address">
              <span>Warehouse Society, 234</span>
              <span>Bahagia Ave Street PRBW 29281</span>
            </div>
            <div className="footer-content__email">
              <p>info@warehouse.project</p>
              <p>1-232-3434 (Main)</p>
            </div>
          </div>
          <div className="footer-content__about">
            <h3 className="footer-content__title">About</h3>
            <p>Profile</p>
            <p>Features</p>
            <p>Careers</p>
            <p>DW News</p>
          </div>
          <div className="footer-content__help">
            <h3 className="footer-content__title">Help</h3>
            <p>Support</p>
            <p>Sign up</p>
            <p>Guide</p>
            <p>Reports</p>
            <p>Q&A</p>
          </div>
          <div className="footer-content__social-media">
            <h3 className="footer-content__title">Social Media</h3>
            <div>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </div>
        <div className="footer__copyright-wrap">
          <div className="footer__copyright">
            <p>© Datawarehouse™, 2020. All rights reserved.</p>
            <p>Company Registration Number: 21479524.</p>
          </div>
          <img src={chatIcon} alt="" className="footer__chat" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
