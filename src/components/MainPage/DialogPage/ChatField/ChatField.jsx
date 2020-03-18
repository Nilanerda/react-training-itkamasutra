import React from "react";
import styles from "./ChatField.module.scss";
import CurrentRecipientChat from "./CurrentRecipientChat/CurrentRecipientChat";
import MessageInput from "./MessageInput/MessageInput";

const ChatField = (props) => {
    return (
        <div className={styles.chatField}>
            <CurrentRecipientChat currentDialogState={props.dialogPageState.messagesData}/>
            <MessageInput />
        </div>
    )
};

export default ChatField;