import React from "react";
import './PostInstance.scss';
import PostInstanceData from "./PostInstanceData/PostInstanceData";

const PostInstance = () => {
    return (
        <article className="post-instance">
            <div className="post-instance-wrapper">
                <div className="post-instance-avatar"></div>
                <PostInstanceData/>
            </div>
        </article>
    )
};

export default PostInstance;