import React from "react";
import styles from './MessageInput.module.scss';
import {addMessageCreator, updateNewMessageDataCreator} from "../../../../../state";

const MessageInput = (props) => {

    let newMessageValue = props.dialogPageState.newMessagesData;

    let onSendMessage = () => {
        props.dispatch(addMessageCreator())
    };

    let onNewMessageValueChange = (e) => {
        let newMessageValue = e.target.value;
        props.dispatch(updateNewMessageDataCreator(newMessageValue))
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