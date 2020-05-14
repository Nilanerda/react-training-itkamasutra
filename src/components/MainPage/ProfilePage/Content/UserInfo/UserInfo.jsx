import React from "react";
import './UserInfo.scss';

const UserInfo = (props) => {
    return (
        <div className="main-profile-info">
            <div className="profile-avatar">
                <img src={props.profile.photos.large} alt=""/>
            </div>
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

export default UserInfo;