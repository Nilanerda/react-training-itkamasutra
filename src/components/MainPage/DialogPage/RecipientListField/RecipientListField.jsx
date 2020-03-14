import React from "react";
import styles from "./RecipientListField.module.scss";
import RecipientSearchField from "./RecipientSearchField/RecipientSearchField";
import RecipientList from "./RecipientList/RecipientList";

const RecipientListField = () => {
    return (
        <div className={styles.recipientListField}>
            <RecipientSearchField/>
            <RecipientList/>
        </div>
    )
};

export default RecipientListField;