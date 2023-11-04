import React from "react";
import styles from "./Card.module.css";

function CardBody({ children }) {
    return <div className={styles.body}>{children}</div>;
}

export default CardBody;
