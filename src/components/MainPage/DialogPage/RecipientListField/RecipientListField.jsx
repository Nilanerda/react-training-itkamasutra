import React from "react";
import styles from "./RecipientListField.module.scss";
import RecipientSearchField from "./RecipientSearchField/RecipientSearchField";
import RecipientList from "./RecipientList/RecipientList";

const RecipientListField = (props) => {
    return (
        <div className={styles.recipientListField}>
            <RecipientSearchField/>
            <RecipientList recipientDataState={props.dialogPageState.recipientData}/>
        </div>
    )
};

export default RecipientListField;