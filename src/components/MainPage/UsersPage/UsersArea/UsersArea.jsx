import React from "react";
import styles from './UsersArea.module.scss';

const UsersArea = (props) => {
    return (
        <div className={styles.usersAreaContainer}>
            {
                props.usersData.map(user =>
                    <div className={styles.userInstance} key={user.id}>
                        <div className={styles.userInstanceAvatar}></div>
                        <div className={styles.userInstanceInfo}>
                            <ul>
                                <li className={styles.userInstanceInfoName}>
                                    <a href="">{user.fullName}</a>
                                </li>
                                <li>{user.location.city}, {user.location.country}</li>
                                <li className={styles.userInstanceInfoStatus}>{user.profileStatus}</li>
                            </ul>
                        </div>
                        <div className={styles.userInstanceButton}>
                            {
                                user.followStatus
                                    ? <button className={styles.unfollowButton} onClick={() => {props.toogleFollowAction(user.id)}}>Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => {props.toogleFollowAction(user.id)}}>Follow</button>
                            }
                        </div>
                    </div>)
            }
        </div>
    )
}

export default UsersArea;