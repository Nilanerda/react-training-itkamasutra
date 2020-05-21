import React from "react";
import styles from './UsersArea.module.scss';
import userDefaultImage from "../../../../assets/images/pug.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                <li>{"user.location.city"}, {"user.location.country"}</li>
                                <li className={styles.userInstanceInfoStatus}>{user.status}</li>
                            </ul>
                        </div>
                        <div className={styles.userInstanceButton}>
                            {
                                user.followStatus
                                    ? <button className={styles.unfollowButton} onClick={() => {
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '61f61afb-d156-4111-9507-73744ab9bc1d'
                                                }
                                            })
                                            .then(response => {
                                                (response.data.resultCode === 0 ? props.toogleFollowAction(user.id) : console.log('error'))
                                            })
                                    }}>Unfollow</button>
                                    : <button className={styles.followButton} onClick={() => {
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '61f61afb-d156-4111-9507-73744ab9bc1d'
                                                }
                                            })
                                            .then(response => {
                                                (response.data.resultCode === 0 ? props.toogleFollowAction(user.id) : console.log('error'))
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