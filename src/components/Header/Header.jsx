import styles from "./Header.module.css";

function Header() {
  function mobileNavToggleHandler() {
    const mobileNavToggle = document.querySelector(
      `.${styles["mobile-nav-toggle"]}`
    );
    if (mobileNavToggle) {
      
    }
  }

  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    const headerElement = document.querySelector(`.${styles.header}`);
    console.log(headerElement);
    if (!headerElement) {
      window.removeEventListener("scroll", handleScroll);
      return;
    }

    if (window.scrollY > 50) {
      headerElement.classList.add(styles.scrolledHeader);
    } else {
      headerElement.classList.remove(styles.scrolledHeader);
    }
  }

  return (
    <header className={styles.header}>
      <nav>
        <h1 className={styles.logo}>Logis</h1>
        <ul className={styles["main-menu"]}>
          <li>
            <a href="#" className={styles.active}>
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li className={styles.dropdown}>
            <a href="#">
              Dropdown <i className="fa-solid fa-chevron-down"></i>
            </a>
            <ul className={styles["sub-menu"]}>
              <li>
                <a href="#">Dropdown 1</a>
              </li>
              <li className={styles.dropdown}>
                <a href="#">
                  Deep dropdown <i className="fa-solid fa-chevron-down"></i>
                </a>
                <ul className={`${styles["sub-menu"]}  ${styles["side-menu"]}`}>
                  <li>
                    <a href="#">Deep Dropdown1</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown2</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown3</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown4</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Dropdown 2</a>
              </li>
              <li>
                <a href="#">Dropdown 3</a>
              </li>
              <li>
                <a href="#">Dropdown 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className={styles["btn-wrap"]}>
            <button className={styles.btn}>Get a Quote</button>
          </li>
          <li className={styles["mobile-nav-toggle"]}>
            <i className="bi bi-list"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
