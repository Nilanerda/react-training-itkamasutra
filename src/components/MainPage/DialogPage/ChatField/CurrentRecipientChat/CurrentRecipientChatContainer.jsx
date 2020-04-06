import React from "react";
import CurrentRecipientChat from "./CurrentRecipientChat";

const CurrentRecipientChatContainer = (props) => {

    let state = props.store.getState();

    return (
        <CurrentRecipientChat messagesData={state.dialogPage.messagesData}/>
    )
};

export default CurrentRecipientChatContainer;