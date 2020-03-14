import React from "react";
import styles from './RecipientSearchField.module.scss';

const RecipientSearchField = () => {
    return (
        <div className={styles.recipientSearchField}>
            <input type="search" placeholder='Search'/>
        </div>
    )
};

export default RecipientSearchField;