import React from "react";
import styles from "./Preloader.module.scss"
import preloaderIcon from "../../../assets/images/30.svg";

const Preloader = () => {
    return (
        <div className={styles.preloaderArea}>
            <img src={preloaderIcon} alt="preloader"/>
        </div>
    )
}

export default Preloader;