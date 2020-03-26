import React from "react";
import './Posts.scss';
import CreatePost from "./CreatePost/CreatePost";
import PostInstance from "./PostInstance/PostInstance";

const Posts = (props) => {
    let postInstance = props.profilePageState.map((post) => <PostInstance id={post.id} post={post.post}/>);
    return (
        <div className="main-posts-field">
            <CreatePost newPostValue={props.newPostValue} dispatch={props.dispatch}/>
            {postInstance}
        </div>
    )
};

export default Posts;