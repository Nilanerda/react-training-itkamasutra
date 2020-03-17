import React from "react";
import styles from './RecipientList.module.scss';
import RecipientInstance from "./RecipientInstance/RecipientInstance";

const RecipientList = (props) => {

    let recipientRenderData = props.recipientDataState.map((recipient) => {
        return (<RecipientInstance name={recipient.name} id={recipient.id}/>)
    });

    return (
        <div className={styles.recipientList}>
            {recipientRenderData}
        </div>
    )
};

export default RecipientList;