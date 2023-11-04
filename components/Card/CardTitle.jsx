import React from "react";
import styles from "./Card.module.css";

function CardTitle({ children }) {
    return <div className={styles.title}>{children}</div>;
}

export default CardTitle;
