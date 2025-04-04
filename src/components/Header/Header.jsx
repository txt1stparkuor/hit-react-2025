import { useEffect, useState } from "react";
import "./styles.scss";
function Header() {
  const [isReponsiveList, setIsReponsiveList] = useState(false);
  function handleListReponsive() {
    setIsReponsiveList(!isReponsiveList);
    console.log("haha");
  }
  return (
    <header className="header wrapper">
      <h1 className="header__logo">eNno</h1>
      <nav className="header__nav">
        <ul
          className={
            "header__list" + (isReponsiveList ? " reponsive-list" : "")
          }
        >
          <li className="header__nav-item">
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#">About</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Services</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="header__nav-item">
            <a href="#">Team</a>
          </li>
          <li className="header__nav-item header__dropdown">
            <a href="#">
              Dropdown <i className="bi bi-chevron-down"></i>
            </a>
            <ul className="header__dropdown-list">
              <li className="header__dropdown-item">
                <a href="#">Dropdown 1</a>
              </li>
              <li className="header__dropdown-item header__dropdown">
                <a href="#">
                  Deep dropdown
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul className="header__dropdown-list header__side-menu">
                  <li className="header__dropdown-item">
                    <a href="#">Deep Dropdown1</a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="#">Deep Dropdown2</a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="#">Deep Dropdown3</a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="#">Deep Dropdown4</a>
                  </li>
                  <li className="header__dropdown-item">
                    <a href="#">Deep Dropdown5</a>
                  </li>
                </ul>
              </li>
              <li className="header__dropdown-item">
                <a href="#">Dropdown 3</a>
              </li>
              <li className="header__dropdown-item">
                <a href="#">Dropdown 4</a>
              </li>
              <li className="header__dropdown-item">
                <a href="#">Dropdown 5</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="header__btn">Get Started</button>
        <i
          onClick={handleListReponsive}
          className="header__mobile-nav-toggle d-xl-none bi bi-list"
        ></i>
      </nav>
    </header>
  );
}

export default Header;
