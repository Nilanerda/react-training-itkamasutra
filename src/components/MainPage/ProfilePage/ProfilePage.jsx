import React from "react";
import styles from "./ProfilePage.module.scss";
import Content from "./Content/Content";
import Preloader from "../../common/Preloader/Preloader";

const ProfilePage = (props) => {
    return (
        <div className={styles.innerContainer}>
            {!props.profile ? <Preloader/> : <Content profile={props.profile}/>}
        </div>
    )
};

export default ProfilePage;