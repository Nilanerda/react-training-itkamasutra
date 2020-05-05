import React from "react";
import styles from './UsersArea.module.scss';
import * as axios from "axios";
import userDefaultImage from "../../../../assets/images/pug.jpg";

class UsersArea extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

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
            <div className={styles.usersAreaContainer}>
                {
                    this.props.usersData.map(user =>
                        <div className={styles.userInstance} key={user.id}>
                            <div className={styles.userInstanceAvatar}>
                                <img src={user.photos.small != null ? user.photos.small : userDefaultImage}
                                     alt={user.name}/>
                            </div>
                            <div className={styles.userInstanceInfo}>
                                <ul>
                                    <li className={styles.userInstanceInfoName}>
                                        <a href="">{user.name}</a>
                                    </li>
                                    <li>{"user.location.city"}, {"user.location.country"}</li>
                                    <li className={styles.userInstanceInfoStatus}>{user.status}</li>
                                </ul>
                            </div>
                            <div className={styles.userInstanceButton}>
                                {
                                    user.followStatus
                                        ? <button className={styles.unfollowButton} onClick={() => {
                                            this.props.toogleFollowAction(user.id)
                                        }}>Unfollow</button>
                                        : <button className={styles.followButton} onClick={() => {
                                            this.props.toogleFollowAction(user.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </div>)
                }
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

export default UsersArea;