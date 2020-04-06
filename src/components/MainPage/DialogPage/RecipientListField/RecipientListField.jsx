import React from "react";
import styles from "./RecipientListField.module.scss";
import RecipientSearchField from "./RecipientSearchField/RecipientSearchField";
import RecipientListContainer from "./RecipientList/RecipientListContainer";

const RecipientListField = (props) => {
    return (
        <div className={styles.recipientListField}>
            <RecipientSearchField/>
            <RecipientListContainer store={props.store}/>
        </div>
    )
};

export default RecipientListField;