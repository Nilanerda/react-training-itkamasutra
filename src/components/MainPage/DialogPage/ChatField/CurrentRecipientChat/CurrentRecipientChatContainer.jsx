import React from "react";
import CurrentRecipientChat from "./CurrentRecipientChat";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesData: state.dialogPage.messagesData
    }
};

const CurrentRecipientChatContainer = connect(mapStateToProps)(CurrentRecipientChat);

export default CurrentRecipientChatContainer;