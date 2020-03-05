import React from "react";
import styles from './DialogPage.module.scss';

const DialogPage = () => {
    return (
        <div className={styles.innerContainer}>
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
            <div className={styles.chatField}>
                <div className={styles.currentRecipientChat}>
                    <div className={`${styles.messageInstance} ${styles.receivedMessage}`}>blah</div>
                    <div className={`${styles.messageInstance} ${styles.sentMessage}`}>lorem</div>
                    <div className={`${styles.messageInstance} ${styles.receivedMessage}`}>blah</div>
                    <div className={`${styles.messageInstance} ${styles.sentMessage}`}>lorem</div>
                    <div className={`${styles.messageInstance} ${styles.receivedMessage}`}>blah</div>
                    <div className={`${styles.messageInstance} ${styles.sentMessage}`}>lorem</div>
                    <div className={`${styles.messageInstance} ${styles.receivedMessage}`}>blah</div>
                    <div className={`${styles.messageInstance} ${styles.sentMessage}`}>lorem</div>
                    <div className={`${styles.messageInstance} ${styles.receivedMessage}`}>blah</div>
                    <div className={`${styles.messageInstance} ${styles.sentMessage}`}>lorem</div>
                </div>
            </div>
        </div>
    )
};

export default DialogPage;