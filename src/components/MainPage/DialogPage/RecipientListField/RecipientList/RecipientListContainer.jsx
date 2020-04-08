import React from "react";
import RecipientList from "./RecipientList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        recipientData: state.dialogPage.recipientData
    }
};

const RecipientListContainer = connect(mapStateToProps)(RecipientList);

export default RecipientListContainer;