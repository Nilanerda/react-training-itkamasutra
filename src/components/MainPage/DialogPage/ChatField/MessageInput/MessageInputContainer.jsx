import React from "react";
import MessageInput from "./MessageInput";
import {sendMessage, updateNewMessageData} from "../../../../../store/dialog-page-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageData: state.dialogPage.newMessageData
    }
};

const MessageInputContainer = connect(mapStateToProps, {sendMessage, updateNewMessageData})(MessageInput);

export default MessageInputContainer;