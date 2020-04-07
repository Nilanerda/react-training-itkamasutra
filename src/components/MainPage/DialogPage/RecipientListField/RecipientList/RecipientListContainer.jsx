import React from "react";
import RecipientInstance from "./RecipientInstance/RecipientInstance";
import RecipientList from "./RecipientList";
import StoreContext from "../../../../../store/store-context";

const RecipientListContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <RecipientList recipientData={store.getState().dialogPage.recipientData}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
};

export default RecipientListContainer;