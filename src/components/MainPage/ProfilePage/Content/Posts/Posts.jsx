import React from "react";
import './Posts.scss';
import CreatePost from "./CreatePost/CreatePost";
import PostInstance from "./PostInstance/PostInstance";

const Posts = () => {
    return (
        <div className="main-posts-field">
            <CreatePost/>
            <PostInstance/>
        </div>
    )
};

export default Posts;