import React from "react";
import styles from "./ChatField.module.scss";
import CurrentRecipientChatContainer from "./CurrentRecipientChat/CurrentRecipientChatContainer";
import MessageInputContainer from "./MessageInput/MessageInputContainer";

const ChatField = () => {
    return (
        <div className={styles.chatField}>
            <CurrentRecipientChatContainer />
            <MessageInputContainer />
        </div>
    )
};

export default ChatField;