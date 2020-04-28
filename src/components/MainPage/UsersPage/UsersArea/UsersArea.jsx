import React from "react";
import styles from './UsersArea.module.scss';

const UsersArea = (props) => {

    if (props.usersData.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    fullName: 'Vasya',
                    followStatus: false,
                    profileStatus: 'lorem1',
                    location: {country: 'Ukraine', city: 'Kyiv'}
                },
                {
                    id: 2,
                    fullName: 'Petro',
                    followStatus: false,
                    profileStatus: 'lorem2',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 3,
                    fullName: 'Svetlana',
                    followStatus: true,
                    profileStatus: 'lorem3',
                    location: {country: 'Hungary', city: 'Budapest'}
                },
                {
                    id: 4,
                    fullName: 'Dmytro',
                    followStatus: false,
                    profileStatus: 'lorem4',
                    location: {country: 'Japan', city: 'Tokyo'}
                },
                {
                    id: 5,
                    fullName: 'Pavel',
                    followStatus: true,
                    profileStatus: 'lorem5',
                    location: {country: 'China', city: 'Shanghai'}
                },
                {
                    id: 6,
                    fullName: 'Anna',
                    followStatus: true,
                    profileStatus: 'lorem6',
                    location: {country: 'USA', city: 'Chicago'}
                },
            ]
        )
    }

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