import React from "react";
import styles from "./ChatField.module.scss";

const ChatField = () => {
    return (
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
    )
};

export default ChatField;