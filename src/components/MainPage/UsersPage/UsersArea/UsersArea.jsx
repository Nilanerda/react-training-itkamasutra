import React from "react";
import styles from './UsersArea.module.scss';
import userDefaultImage from "../../../../assets/images/pug.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../../../api/api";

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
                                    <NavLink to={'/profile/' + user.id}>{user.name}</NavLink>
                                </li>
                                <li className={styles.userInstanceInfoStatus}>{user.status}</li>
                            </ul>
                        </div>
                        <div className={styles.userInstanceButton}>
                            {
                                user.followStatus
                                    ? <button className={styles.unfollowButton} onClick={() => {
                                        usersAPI.unfollowUser(user.id)
                                            .then(response => {
                                                (response.resultCode === 0 ? props.toogleFollowAction(user.id) : console.log('error'))
                                            })
                                    }}>Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => {
                                        usersAPI.followUser(user.id)
                                            .then(response => {
                                                (response.resultCode === 0 ? props.toogleFollowAction(user.id) : console.log('error'))
                                            })
                                    }}>Follow</button>
                            }
                        </div>
                    </div>)
            }
        </div>
    )
}

export default UsersArea;