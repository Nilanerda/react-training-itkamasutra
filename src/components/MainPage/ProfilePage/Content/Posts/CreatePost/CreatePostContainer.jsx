import React from "react";
import {addPostCreator, updatePostValueCreator} from "../../../../../../store/profile-page-reducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };

    let updatePostCreatingValue = (currentPostValue) => {
        props.store.dispatch(updatePostValueCreator(currentPostValue));
    };

    return (
        <CreatePost updatePostCreatingValue={updatePostCreatingValue} addPost={addPost} newPostData={state.profilePage.newPostData}/>
    )
};

export default CreatePostContainer;