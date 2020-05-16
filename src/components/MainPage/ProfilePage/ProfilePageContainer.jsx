import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {setUserProfile} from "../../../store/profile-page-reducer";
import {withRouter} from "react-router-dom";

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7654
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let ProfilePageUrlData = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfilePageUrlData);