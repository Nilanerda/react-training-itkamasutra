import React from "react";
import styles from "./RecipientListField.module.scss";
import RecipientSearchField from "./RecipientSearchField/RecipientSearchField";
import RecipientListContainer from "./RecipientList/RecipientListContainer";

const RecipientListField = () => {
    return (
        <div className={styles.recipientListField}>
            <RecipientSearchField/>
            <RecipientListContainer />
        </div>
    )
};

export default RecipientListField;