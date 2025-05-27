import React from "react";
import styles from "./BaseButton.module.scss";
function BaseButton({ text, children, ...otherProps }) {
  return (
    <button className={styles.btn} {...otherProps}>
      {children || text}
    </button>
  );
}

export default BaseButton;