import React from "react";
import styles from './DialogPage.module.scss';
import RecipientListField from "./RecipientListField/RecipientListField";
import ChatField from "./ChatField/ChatField";

const DialogPage = () => {
    return (
        <div className={styles.innerContainer}>
            <RecipientListField />
            <ChatField />
        </div>
    )
};

export default DialogPage;