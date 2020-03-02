import React from "react";
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="app-nav">
            <div className="inner-container">
                <ul className="app-nav-panel">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;