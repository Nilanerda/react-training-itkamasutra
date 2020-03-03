import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className="main-info-wrapper">
            <UserInfo/>
            <Posts/>
        </div>

    )
};

export default Content;