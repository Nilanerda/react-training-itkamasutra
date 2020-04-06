import React from "react";
import styles from "./ChatField.module.scss";
import CurrentRecipientChatContainer from "./CurrentRecipientChat/CurrentRecipientChatContainer";
import MessageInputContainer from "./MessageInput/MessageInputContainer";

const ChatField = (props) => {
    return (
        <div className={styles.chatField}>
            <CurrentRecipientChatContainer store={props.store}/>
            <MessageInputContainer store={props.store}/>
        </div>
    )
};

export default ChatField;