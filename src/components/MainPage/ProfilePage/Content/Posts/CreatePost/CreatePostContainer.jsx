import React from "react";
import {addPostCreator, updatePostValueCreator} from "../../../../../../store/profile-page-reducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostData: state.profilePage.newPostData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostCreatingValue: (currentPostValue) => {
            dispatch(updatePostValueCreator(currentPostValue));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
};

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;