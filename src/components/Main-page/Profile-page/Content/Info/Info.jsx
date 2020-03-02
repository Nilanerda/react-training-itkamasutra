import React from "react";
import './Info.scss';

const Info = () => {
    return (
        <div className="main-profile-info">
            <div className="profile-avatar"></div>
            <div className="profile-info">
                <ul className="profile-info-data">
                    <li>Name</li>
                    <li>Date of Birth:</li>
                    <li>City:</li>
                    <li>Education:</li>
                    <li>Web site:</li>
                </ul>
            </div>
        </div>
    )
};

export default Info;