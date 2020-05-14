import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";
import Wallpaper from "./Wallpaper/Wallpaper";

const Content = (props) => {
    return (
        <div className="main-info-wrapper">
            <Wallpaper/>
            <UserInfo profile={props.profile}/>
            <PostsContainer/>
        </div>

    )
};

export default Content;