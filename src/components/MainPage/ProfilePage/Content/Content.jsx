import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = () => {
    return (
        <div className="main-info-wrapper">
            <UserInfo/>
            <PostsContainer />
        </div>

    )
};

export default Content;