import React from "react";
import styles from './UsersPagePagination.module.scss';
import * as axios from "axios";

class UsersPagePagination extends React.Component {

    onPageNumberChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalIncomeUsersCount / this.props.shownUsers);
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
                                        this.onPageNumberChange(page)
                                    }}
                                    className={`${styles.pageInstance} ${this.props.currentPage === page && styles.pageInstanceSelected}`}>{page}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default UsersPagePagination;