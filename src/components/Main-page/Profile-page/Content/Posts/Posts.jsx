import React from "react";
import './Posts.scss';
import CreatePost from "./Create-post/Create-post";
import PostInstance from "./Post-instance/Post-instance";

const Posts = () => {
    return (
        <div className="main-posts-field">
            <CreatePost/>
            <PostInstance/>
        </div>
    )
};

export default Posts;