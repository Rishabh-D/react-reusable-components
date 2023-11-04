import React from "react";
import styles from "./Card.module.css";
function CardIcon({ children }) {
    return <div className={styles.img}>{children}</div>;
}

export default CardIcon;
