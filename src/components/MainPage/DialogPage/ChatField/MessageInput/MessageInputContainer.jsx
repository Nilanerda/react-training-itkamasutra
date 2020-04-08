import React from "react";
import MessageInput from "./MessageInput";
import {addMessageCreator, updateNewMessageValueCreator} from "../../../../../store/dialog-page-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageData: state.dialogPage.newMessageData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageValueChange: (newMessageValue) => {
            dispatch(updateNewMessageValueCreator(newMessageValue));
        },
        sendMessage: () => {
            dispatch(addMessageCreator());
        }
    }
};

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);

export default MessageInputContainer;