import React from "react";
import styles from './CurrentRecipientChat.module.scss';
import MessageInstance from "./MessageInstance/MessageInstance";

const CurrentRecipientChat = (props) => {

    let messagesRenderData = props.messagesData.map( (messageData) => {
        return (
            <MessageInstance messageStyleType='sentMessage' message={messageData.message}/>
        )
    });

    return (
        <div className={styles.currentRecipientChat}>
            {messagesRenderData}
        </div>
    )
};

export default CurrentRecipientChat;