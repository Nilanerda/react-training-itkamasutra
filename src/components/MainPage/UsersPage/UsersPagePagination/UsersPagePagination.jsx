import React from "react";
import styles from './UsersPagePagination.module.scss';
import Pagination from "react-js-pagination";

const UsersPagePagination = (props) => {

    return (
        <div className={styles.paginationArea}>
            {props.paginationInit ? <Pagination
                totalItemsCount={props.totalIncomeUsersCount}
                onChange={props.onPageNumberChange}
                activePage={props.currentPage}
                innerClass={styles.pagesArea}
                activeLinkClass={styles.pageSelectedLink}
                itemClass={styles.pageInstanceArea}
                linkClass={styles.pageLink}
                activeClass={styles.pageInstanceAreaSelected}
            /> : null}
        </div>
    )
}

export default UsersPagePagination;