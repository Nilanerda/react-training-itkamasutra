import React from "react";
import UsersArea from "./UsersArea";
import {connect} from "react-redux";
import {
    toggleFollowActionCreator,
    setUsersActionCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator
} from "../../../../store/users-page-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        shownUsers: state.usersPage.shownUsers,
        totalIncomeUsersCount: state.usersPage.totalIncomeUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollowAction: (userId) => {
            dispatch(toggleFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageCreator(page))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountCreator(totalUsersCount))
        }
    }
}

const UsersAreaContainer = connect(mapStateToProps, mapDispatchToProps)(UsersArea);

export default UsersAreaContainer;