import React from "react";
import './Navigation.scss';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="app-nav">
            <div className="inner-container">
                <ul className="app-nav-panel">
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;