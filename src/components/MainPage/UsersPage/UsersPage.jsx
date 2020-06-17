import React from "react";
import styles from "./UsersPage.module.scss"
import Preloader from "../../common/Preloader/Preloader";
import UsersArea from "./UsersArea/UsersArea";
import UsersPagePaginationContainer from "./UsersPagePagination/UsersPagePaginationContainer";

let UsersPage = (props) => {
    return (
        <div className={styles.innerContainer}>
            {props.preloaderInit
                ? <Preloader/>
                : <div>
                    <UsersArea
                        toogleFollowAction={props.toggleFollowAction}
                        usersData={props.usersData}
                        isFetching={props.isFetching}
                        subscribeInProcessToggle={props.subscribeInProcessToggle}
                        subscribeInProcess={props.subscribeInProcess}
                    />
                    <UsersPagePaginationContainer/>
                </div>
            }
        </div>
    )
}

export default UsersPage;