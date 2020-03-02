import React from "react";
import './Content.scss';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className="main-info-wrapper">
            <Info/>
            <Posts/>
        </div>

    )
};

export default Content;