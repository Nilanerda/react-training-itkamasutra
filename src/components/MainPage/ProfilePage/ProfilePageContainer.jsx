import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {setUserProfile} from "../../../store/profile-page-reducer";

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/1795`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <ProfilePage {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfilePageContainer);