import React from "react";
import styles from './UsersPage.module.scss';
import UsersAreaContainer from "./UsersArea/UsersAreaContainer";
import UsersPagePaginationContainer from "./UsersPagePagination/UsersPagePaginationContainer";

let UsersPage = () => {
    return (
        <div className={styles.innerContainer}>
            <UsersAreaContainer/>
            <UsersPagePaginationContainer/>
        </div>
    )
}

export default UsersPage;