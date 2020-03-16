import React from "react";
import styles from './CurrentRecipientChat.module.scss';
import MessageInstance from "./MessageInstance/MessageInstance";

const CurrentRecipientChat = () => {

    let messagesData = [
        {id: 1, message: 'Hi guys'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Svetlana is so pretty'},
        {id: 4, message: 'Dmytro hello'},
        {id: 5, message: 'Guy where is my money hah?'},
        {id: 6, message: 'Love peace'}
    ];

    let messagesRenderData = messagesData.map( (messageData) => {
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