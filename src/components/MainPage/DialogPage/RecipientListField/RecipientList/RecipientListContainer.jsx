import React from "react";
import RecipientInstance from "./RecipientInstance/RecipientInstance";
import RecipientList from "./RecipientList";

const RecipientListContainer = (props) => {

    let state = props.store.getState();

    return (
        <RecipientList  recipientData={state.dialogPage.recipientData}/>
    )
};

export default RecipientListContainer;