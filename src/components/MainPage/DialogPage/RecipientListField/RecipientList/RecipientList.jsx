import React from "react";
import styles from './RecipientList.module.scss';
import RecipientInstance from "./RecipientInstance/RecipientInstance";

const RecipientList = (props) => {

    let recipientRenderData = props.recipientData.map((recipient) => {
        return (<RecipientInstance name={recipient.name} key={recipient.id} id={recipient.id}/>)
    });

    return (
        <div className={styles.recipientList}>
            {recipientRenderData}
        </div>
    )
};

export default RecipientList;