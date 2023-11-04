import React from "react";
import styles from "./Badge.module.css";
// console.log("++>", styles);
const Badge = ({ color, shape, children, ...rest }) => {
    const classNames = `${styles.badge} ${styles[color]} ${styles[shape]}`;
    // console.log(classNames);
    return (
        <button className={classNames} {...rest}>
            {children}
        </button>
    );
};

export default Badge;
