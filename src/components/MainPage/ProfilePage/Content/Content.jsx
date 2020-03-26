import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";

const Content = (props) => {
    return (
        <div className="main-info-wrapper">
            <UserInfo/>
            <Posts profilePageState={props.profilePageState.postsData}
                   dispatch={props.dispatch}
                   newPostValue={props.profilePageState.newPostValue}/>
        </div>

    )
};

export default Content;