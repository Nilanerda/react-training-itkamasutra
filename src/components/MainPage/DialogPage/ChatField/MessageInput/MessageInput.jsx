import React from "react";
import styles from './MessageInput.module.scss';

const MessageInput = () => {
    return (
        <div className={styles.messageInputField}>
            <input type="text" placeholder="Message"/>
        </div>
    )
};

export default MessageInput;