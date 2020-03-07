import React from "react";
import styles from "./RecipientListField.module.scss";

const RecipientListField = () => {
    return (
        <div className={styles.recipientListField}>
            <div className={styles.recipientSearchField}>
                <input type="search" placeholder='Search'/>
            </div>
            <div className={styles.recipientList}>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
                <div className={styles.recipientInstance}>
                    <div className={styles.recipientAvatar}></div>
                    <div className={styles.recipientName}>Vasya</div>
                </div>
            </div>
        </div>
    )
};

export default RecipientListField;