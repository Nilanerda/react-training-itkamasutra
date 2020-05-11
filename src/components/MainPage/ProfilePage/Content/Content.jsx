import React from "react";
import './Content.scss';
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";
import Wallpaper from "./Wallpaper/Wallpaper";

const Content = () => {
    return (
        <div className="main-info-wrapper">
            <Wallpaper/>
            <UserInfo/>
            <PostsContainer />
        </div>

    )
};

export default Content;