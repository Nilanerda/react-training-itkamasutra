import React from "react";
import "./Profile-page.scss";
import Wallpaper from "./Wallpaper/Wallpaper";
import Content from "./Content/Content";

const ProfilePage = () => {
    return (
        <main className="app-main">
            <div className="inner-container">
                <Wallpaper/>
                <Content/>
            </div>
        </main>
    )
};

export default ProfilePage;