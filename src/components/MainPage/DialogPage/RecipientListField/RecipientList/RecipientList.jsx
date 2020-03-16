import React from "react";
import styles from './RecipientList.module.scss';
import RecipientInstance from "./RecipientInstance/RecipientInstance";

const RecipientList = () => {
    let recipientData = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Dmytro'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Anna'}
    ];

    let recipientRenderData = recipientData.map((recipient) => {
        return (<RecipientInstance name={recipient.name} id={recipient.id}/>)
    });

    return (
        <div className={styles.recipientList}>
            {recipientRenderData}
        </div>
    )
};

export default RecipientList;