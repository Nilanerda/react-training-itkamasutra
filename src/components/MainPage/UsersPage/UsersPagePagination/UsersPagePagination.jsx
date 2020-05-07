import React from "react";
import styles from './UsersPagePagination.module.scss';

const UsersPagePagination = (props) => {

    let pagesCount = Math.ceil(props.totalIncomeUsersCount / props.shownUsers);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.paginationArea}>
            <ul className={styles.pagesArea}>
                {pages.map(page => {
                    return (
                        <li>
                            <button
                                onClick={() => {
                                    props.onPageNumberChange(page)
                                }}
                                className={`${styles.pageInstance} ${props.currentPage === page && styles.pageInstanceSelected}`}>{page}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsersPagePagination;