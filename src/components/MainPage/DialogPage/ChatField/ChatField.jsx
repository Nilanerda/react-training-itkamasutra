import React from "react";
import styles from "./ChatField.module.scss";
import CurrentRecipientChat from "./CurrentRecipientChat/CurrentRecipientChat";

const ChatField = (props) => {
    return (
        <div className={styles.chatField}>
            <CurrentRecipientChat currentDialogState={props.dialogPageState.messagesData}/>
        </div>
    )
};

export default ChatField;