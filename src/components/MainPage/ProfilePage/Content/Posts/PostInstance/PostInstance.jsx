import React from "react";
import './PostInstance.scss';
import PostInstanceData from "./PostInstanceData/PostInstanceData";

const PostInstance = (props) => {
    return (
        <article className="post-instance">
            <div className="post-instance-wrapper">
                <div className="avatar-field">
                    <div className="post-instance-avatar"></div>
                </div>
                <PostInstanceData post={props.post}/>
            </div>
        </article>
    )
};

export default PostInstance;