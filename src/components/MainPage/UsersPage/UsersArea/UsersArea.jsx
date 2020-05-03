import React from "react";
import styles from './UsersArea.module.scss';
import * as axios from "axios";
import userDefaultImage from "../../../../assets/images/pug.jpg";

class UsersArea extends React.Component {

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
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
            </div>
        )
    }
}

export default UsersArea;