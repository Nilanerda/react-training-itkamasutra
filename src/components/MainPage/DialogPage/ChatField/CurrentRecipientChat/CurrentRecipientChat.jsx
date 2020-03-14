import React from "react";
import styles from './CurrentRecipientChat.module.scss';
import MessageInstance from "./MessageInstance/MessageInstance";

const CurrentRecipientChat = () => {
    return (
        <div className={styles.currentRecipientChat}>
            <MessageInstance messageStyleType='sentMessage' message='Blah'/>
            <MessageInstance messageStyleType='receivedMessage' message='Lorem'/>
        </div>
    )
};

export default CurrentRecipientChat;