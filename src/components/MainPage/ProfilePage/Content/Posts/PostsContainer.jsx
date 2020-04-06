import React from "react";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let state = props.store.getState();

    return (
        <Posts store={props.store} postsData={state.profilePage.postsData}/>
    )
};

export default PostsContainer;