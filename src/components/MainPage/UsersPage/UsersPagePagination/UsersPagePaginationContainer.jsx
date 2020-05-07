import React from "react";
import UsersPagePagination from "./UsersPagePagination";
import {connect} from "react-redux";
import {
    setUsersActionCreator,
    setCurrentPageCreator,
} from "../../../../store/users-page-reducer";

let mapStateToProps = (state) => {
    return {
        shownUsers: state.usersPage.shownUsers,
        totalIncomeUsersCount: state.usersPage.totalIncomeUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageCreator(page))
        }
    }
}

const UsersAreaContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPagePagination);

export default UsersAreaContainer;