import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = (props) => {
    return (
        <div className="main-info-wrapper">
            <UserInfo/>
            <PostsContainer store={props.store}/>
        </div>

    )
};

export default Content;