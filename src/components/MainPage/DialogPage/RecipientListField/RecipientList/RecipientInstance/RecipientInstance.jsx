import React from "react";
import styles from './RecipientInstance.module.scss';

const RecipientInstance = () => {
    return (
        <div className={styles.recipientInstance}>
            <div className={styles.recipientAvatar}></div>
            <div className={styles.recipientName}>Vasya</div>
        </div>
    )
};

export default RecipientInstance;