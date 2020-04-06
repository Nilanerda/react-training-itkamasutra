import React from "react";
import styles from './DialogPage.module.scss';
import RecipientListField from "./RecipientListField/RecipientListField";
import ChatField from "./ChatField/ChatField";

const DialogPage = (props) => {
    return (
        <div className={styles.innerContainer}>
            <RecipientListField store={props.store}/>
            <ChatField store={props.store}/>
        </div>
    )
};

export default DialogPage;