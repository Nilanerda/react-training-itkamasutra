import React from "react";
import CurrentRecipientChat from "./CurrentRecipientChat";
import StoreContext from "../../../../../store/store-context";

const CurrentRecipientChatContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <CurrentRecipientChat messagesData={store.getState().dialogPage.messagesData}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
};

export default CurrentRecipientChatContainer;