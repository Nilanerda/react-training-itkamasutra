import React from "react";
import './Posts.scss';
import PostInstance from "./PostInstance/PostInstance";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Posts = (props) => {
    let postInstance = props.postsData.map((post) => <PostInstance id={post.id} key={post.id} post={post.post}/>);
    return (
        <div className="main-posts-field">
            <CreatePostContainer />
            {postInstance}
        </div>
    )
};

export default Posts;