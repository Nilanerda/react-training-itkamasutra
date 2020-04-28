import React from "react";
import styles from './UsersPage.module.scss';
import UsersAreaContainer from "./UsersArea/UsersAreaContainer";

let UsersPage = () => {
    return (
        <div className={styles.innerContainer}>
            <UsersAreaContainer/>
        </div>
    )
}

export default UsersPage;