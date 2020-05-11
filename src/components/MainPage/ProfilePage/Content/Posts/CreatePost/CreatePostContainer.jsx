import React from "react";
import {addPost, updateNewPostData} from "../../../../../../store/profile-page-reducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostData: state.profilePage.newPostData
    }
};

const CreatePostContainer = connect(mapStateToProps, {addPost, updateNewPostData})(CreatePost);

export default CreatePostContainer;