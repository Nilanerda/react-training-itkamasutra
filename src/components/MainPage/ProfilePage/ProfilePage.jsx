import React from "react";
import styles from "./ProfilePage.module.scss";
import Wallpaper from "./Wallpaper/Wallpaper";
import Content from "./Content/Content";

const ProfilePage = () => {
    return (
        <div className={styles.innerContainer}>
            <Wallpaper/>
            <Content/>
        </div>
    )
};

export default ProfilePage;