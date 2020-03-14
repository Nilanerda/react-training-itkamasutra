import React from "react";
import styles from "./ChatField.module.scss";
import CurrentRecipientChat from "./CurrentRecipientChat/CurrentRecipientChat";

const ChatField = () => {
    return (
        <div className={styles.chatField}>
            <CurrentRecipientChat/>
        </div>
    )
};

export default ChatField;