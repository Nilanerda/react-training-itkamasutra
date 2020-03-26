import React from "react";
import styles from "./ProfilePage.module.scss";
import Wallpaper from "./Wallpaper/Wallpaper";
import Content from "./Content/Content";

const ProfilePage = (props) => {
    return (
        <div className={styles.innerContainer}>
            <Wallpaper/>
            <Content profilePageState={props.profilePageState}
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default ProfilePage;