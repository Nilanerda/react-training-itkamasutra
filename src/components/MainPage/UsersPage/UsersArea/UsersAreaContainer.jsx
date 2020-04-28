import React from "react";
import UsersArea from "./UsersArea";
import {connect} from "react-redux";
import {
    toggleFollowActionCreator,
    setUsersActionCreator
} from "../../../../store/users-page-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollowAction: (userId) => {
            dispatch(toggleFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersAreaContainer = connect(mapStateToProps, mapDispatchToProps)(UsersArea);

export default UsersAreaContainer;