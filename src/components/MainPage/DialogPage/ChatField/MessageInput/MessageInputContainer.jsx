import React from "react";
import MessageInput from "./MessageInput";
import {addMessageCreator, updateNewMessageValueCreator} from "../../../../../store/dialog-page-reducer";

const MessageInputContainer = (props) => {

    let state = props.store.getState();

    let onSendMessage = () => {
        props.store.dispatch(addMessageCreator())
    };

    let onNewMessageValueChange = (newMessageValue) => {
        props.store.dispatch(updateNewMessageValueCreator(newMessageValue))
    };

    return (
        <MessageInput
            sendMessage={onSendMessage}
            newMessageValueChange={onNewMessageValueChange}
            newMessageData={state.dialogPage.newMessageData}
        />
    )
};

export default MessageInputContainer;