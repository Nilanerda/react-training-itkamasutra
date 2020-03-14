import React from "react";
import styles from './RecipientList.module.scss';
import RecipientInstance from "./RecipientInstance/RecipientInstance";

const RecipientList = () => {
    return (
        <div className={styles.recipientList}>
            <RecipientInstance/>
        </div>
    )
};

export default RecipientList;