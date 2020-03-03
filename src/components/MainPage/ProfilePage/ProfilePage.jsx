import React from "react";
import "./ProfilePage.scss";
import Wallpaper from "./Wallpaper/Wallpaper";
import Content from "./Content/Content";

const ProfilePage = () => {
    return (
        <div className="inner-container">
            <Wallpaper/>
            <Content/>
        </div>
    )
};

export default ProfilePage;