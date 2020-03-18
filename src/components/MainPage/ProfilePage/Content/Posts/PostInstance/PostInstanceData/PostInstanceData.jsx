import React from "react";
import './PostInstanceData.scss';

const PostInstanceData = (props) => {
    return (
        <div className="post-data">
            <p>{props.post}</p>
        </div>
    )
};

export default PostInstanceData;