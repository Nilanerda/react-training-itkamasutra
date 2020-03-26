import React from "react";
import styles from './DialogPage.module.scss';
import RecipientListField from "./RecipientListField/RecipientListField";
import ChatField from "./ChatField/ChatField";

const DialogPage = (props) => {
    return (
        <div className={styles.innerContainer}>
            <RecipientListField dialogPageState={props.dialogPageState}/>
            <ChatField dialogPageState={props.dialogPageState} dispatch={props.dispatch}/>
        </div>
    )
};

export default DialogPage;