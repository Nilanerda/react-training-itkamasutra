import React from "react";
import styles from './RecipientInstance.module.scss';
import {NavLink} from "react-router-dom";

const RecipientInstance = (props) => {
    return (
        <NavLink to={`${/messages/}${props.id}`} className={styles.recipientInstance}>
            <div className={styles.recipientAvatar}></div>
            <div className={styles.recipientName}>{props.name}</div>
        </NavLink>
    )
};

export default RecipientInstance;