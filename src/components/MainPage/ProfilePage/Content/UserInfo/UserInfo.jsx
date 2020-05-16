import React from "react";
import './UserInfo.scss';
import userDefaultImage from "../../../../../assets/images/pug.jpg";

const UserInfo = (props) => {
    return (
        <div className="main-profile-info">
            <div className="profile-avatar">
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userDefaultImage} alt=""/>
            </div>
            <div className="profile-info">
                <ul className="profile-info-data">
                    <li>{props.profile.fullName}</li>
                    <li>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</li>
                    <li>Job description: {props.profile.lookingForAJobDescription}</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    )
};

export default UserInfo;