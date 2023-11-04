import React from "react";
import styles from "./Banner.module.css";

function Banner({ type, title, info, children }) {
    return (
        <div className={`${styles[type]} ${styles.banner}`}>
            <div className="svg">
                <img src={`../../assets/${type.toLowerCase()}Icon.svg`} />
            </div>
            <div className="main">
                <div className={`${styles[type]} ${styles.title}`}>{title}</div>
                {info && (
                    <div className={`${styles[type]} ${styles.info}`}>
                        {info}
                    </div>
                )}
                {children && (
                    <div className={`${styles[type]} ${styles.body}`}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Banner;
