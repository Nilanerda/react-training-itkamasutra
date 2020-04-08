import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;