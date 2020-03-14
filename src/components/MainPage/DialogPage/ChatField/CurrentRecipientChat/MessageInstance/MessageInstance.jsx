import React from "react";
import styles from './MessageInstance.module.scss';

const MessageInstance = (props) => {
    return (
        <div className={`${styles.messageInstance}`}>{props.message}</div>
    )
};

export default MessageInstance;