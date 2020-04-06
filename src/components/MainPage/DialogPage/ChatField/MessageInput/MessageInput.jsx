import React from "react";
import styles from './MessageInput.module.scss';

const MessageInput = (props) => {

    let newMessageValue = props.newMessageData;

    let onSendMessage = () => {
        props.sendMessage()
    };

    let onNewMessageValueChange = (e) => {
        let newMessageValue = e.target.value;
        props.newMessageValueChange(newMessageValue);
    };

    return (
        <div className={styles.messageInputField}>
            <input
                type="text"
                placeholder="Message"
                value={newMessageValue}
                onChange={onNewMessageValueChange}/>
            <button onClick={onSendMessage}>Send</button>
        </div>
    )
};

export default MessageInput;