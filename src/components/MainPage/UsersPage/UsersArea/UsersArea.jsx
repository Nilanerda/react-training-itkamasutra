import React from "react";
import styles from './UsersArea.module.scss';
import userDefaultImage from "../../../../assets/images/pug.jpg";
import Preloader from "../../../common/Preloader/Preloader";

const UsersArea = (props) => {
    return (
        <div className={styles.usersAreaContainer}>
            {props.isFetching ? <Preloader/> : null}
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