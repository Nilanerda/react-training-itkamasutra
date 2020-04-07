import React from "react";
import MessageInput from "./MessageInput";
import {addMessageCreator, updateNewMessageValueCreator} from "../../../../../store/dialog-page-reducer";
import StoreContext from "../../../../../store/store-context";

const MessageInputContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let onSendMessage = () => {
                    store.dispatch(addMessageCreator())
                };

                let onNewMessageValueChange = (newMessageValue) => {
                    store.dispatch(updateNewMessageValueCreator(newMessageValue))
                };

                return (
                    <MessageInput
                        sendMessage={onSendMessage}
                        newMessageValueChange={onNewMessageValueChange}
                        newMessageData={store.getState().dialogPage.newMessageData}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
};

export default MessageInputContainer;