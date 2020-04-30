import React from "react";
import styles from './UsersArea.module.scss';
import * as axios from "axios";
import userDefaultImage from "../../../../assets/images/pug.jpg";

const UsersArea = (props) => {

    if (props.usersData.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={styles.usersAreaContainer}>
            {
                props.usersData.map(user =>
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
                                        props.toogleFollowAction(user.id)
                                    }}>Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => {
                                        props.toogleFollowAction(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </div>)
            }
        </div>
    )
}

export default UsersArea;