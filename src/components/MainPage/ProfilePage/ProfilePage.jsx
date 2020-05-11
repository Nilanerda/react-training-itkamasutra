import React from "react";
import styles from "./ProfilePage.module.scss";
import Content from "./Content/Content";

const ProfilePage = () => {
    return (
        <div className={styles.innerContainer}>
            <Content />
        </div>
    )
};

export default ProfilePage;